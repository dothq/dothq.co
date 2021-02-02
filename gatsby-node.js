const path = require(`path`)
const { paginate } = require(`gatsby-awesome-pagination`)

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions

    // const result = await graphql(`
    //     {
    //         allGhostPost(sort: { order: ASC, fields: published_at }) {
    //             edges {
    //                 node {
    //                     slug
    //                 }
    //             }
    //         }
    //         allGhostTag(sort: { order: ASC, fields: name }) {
    //             edges {
    //                 node {
    //                     slug
    //                     url
    //                     postCount
    //                 }
    //             }
    //         }
    //         allGhostAuthor(sort: { order: ASC, fields: name }) {
    //             edges {
    //                 node {
    //                     slug
    //                     url
    //                     postCount
    //                 }
    //             }
    //         }
    //         allGhostPage(sort: { order: ASC, fields: published_at }) {
    //             edges {
    //                 node {
    //                     slug
    //                     url
    //                 }
    //             }
    //         }
    //     }
    // `)

    // // Check for any errors
    // if (result.errors) {
    //     throw new Error(result.errors)
    // }

    // // Extract query results
    // const pages = result.data.allGhostPage.edges
    // const posts = result.data.allGhostPost.edges

    // // Load templates
    // const pageTemplate = path.resolve(`./src/templates/blog.tsx`)
    // const postTemplate = path.resolve(`./src/templates/post.tsx`)

    // // Create pages
    // pages.forEach(({ node }) => {
    //     // This part here defines, that our pages will use
    //     // a `/:slug/` permalink.
    //     node.url = `/blog/${node.slug}/`

    //     createPage({
    //         path: node.url,
    //         component: pageTemplate,
    //         context: {
    //             // Data passed to context is available
    //             // in page queries as GraphQL variables.
    //             slug: node.slug,
    //         },
    //     })
    // })

    // // Create post pages
    // posts.forEach(({ node }) => {
    //     // This part here defines, that our posts will use
    //     // a `/:slug/` permalink.
    //     node.url = `/blog/${node.slug}/`

    //     createPage({
    //         path: node.url,
    //         component: postTemplate,
    //         context: {
    //             // Data passed to context is available
    //             // in page queries as GraphQL variables.
    //             slug: node.slug,
    //         },
    //     })
    // })

    // // Create pagination
    // paginate({
    //     createPage,
    //     items: posts,
    //     itemsPerPage: posts.length,
    //     component: pageTemplate,
    //     pathPrefix: ({ pageNumber }) => {
    //         if (pageNumber === 0) {
    //             return `/blog`
    //         } else {
    //             return `/blog`
    //         }
    //     },
    // })
}