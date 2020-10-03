const axios = require("axios")
const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)
const { resolve } = require("path")

exports.onCreateNode = ({ node }) => {
  console.log(`Node created of type "${node.internal.type}"`)
}

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
      allGhostTag(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostAuthor(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostPage(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
            url
          }
        }
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Extract query results
  const pages = result.data.allGhostPage.edges
  const posts = result.data.allGhostPost.edges

  // Load templates
  const pageTemplate = path.resolve(`./src/templates/blog.tsx`)
  const postTemplate = path.resolve(`./src/templates/post.tsx`)

  // Create pages
  pages.forEach(({ node }) => {
    console.log(node)

    // This part here defines, that our pages will use
    // a `/:slug/` permalink.
    node.url = `/blog/${node.slug}/`

    createPage({
      path: node.url,
      component: pageTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  // Create post pages
  posts.forEach(({ node }) => {
    // This part here defines, that our posts will use
    // a `/:slug/` permalink.
    node.url = `/blog/${node.slug}/`

    createPage({
      path: node.url,
      component: postTemplate,
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })

  // Create pagination
  paginate({
    createPage,
    items: posts,
    itemsPerPage: posts.length,
    component: pageTemplate,
    pathPrefix: ({ pageNumber }) => {
      if (pageNumber === 0) {
        return `/blog`
      } else {
        return `/blog`
      }
    },
  })

  const getMarkdown = url => {
    return new Promise(resolve => {
      axios.get(url).then(res => {
        console.log(res.headers)
        resolve(res.data)
      })
    })
  }

  const getMarkdownMeta = file => {
    return new Promise(resolve => {
      axios
        .get(
          `https://api.github.com/repos/dothq/legal/commits?path=${file}&page=1&per_page=1`
        )
        .then(res => {
          const months = {
            0: "January",
            1: "February",
            2: "March",
            3: "April",
            4: "May",
            5: "June",
            6: "July",
            7: "August",
            8: "September",
            9: "October",
            10: "November",
            11: "December",
          }

          const d = new Date(res.data[0].commit.committer.date)
          const date = `${d.getDate()} ${
            months[d.getMonth()]
          } ${d.getFullYear()}`

          resolve({
            lastUpdated: date,
            author: {
              avatar: res.data[0].author.avatar_url,
              name: res.data[0].author.login,
            },
          })
        })
    })
  }

  const generateLegalContext = async policyName => {
    const base = "https://raw.githubusercontent.com/dothq/legal/master"

    const policy = await getMarkdown(`${base}/${policyName}.md`)
    const policyMeta = await getMarkdownMeta(`${policyName}.md`)

    const names = {
      PRIVACY_POLICY: "Privacy Policy",
    }

    return {
      title: names[policyName],
      content: policy,
      historyLink: `https://github.com/dothq/legal/commits/master/${policyName}.md`,
      ...policyMeta,
    }
  }

  createPage({
    path: `/legal/privacy`,
    component: require.resolve("./src/templates/legal.tsx"),
    context: { legal: await generateLegalContext("PRIVACY_POLICY") },
  })
}
