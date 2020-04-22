const path = require(`path`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const postTemplate = path.resolve(`./src/templates/post.tsx`)
  // Query Ghost data
  const result = await graphql(`
    {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  if (!result.data.allGhostPost) {
    return
  }

  const items = result.data.allGhostPost.edges
  items.forEach(({ node }) => {
    node.url = `/blog/${node.slug}/`
    actions.createPage({
      path: node.url,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}