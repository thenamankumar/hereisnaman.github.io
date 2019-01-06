const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/templates/blog-post.js`);
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              filter: { fileAbsolutePath: { regex: "/blog/" } }
              limit: 1000
            ) {
              edges {
                node {
                  excerpt(pruneLength: 100)
                  timeToRead
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    show
                    slug
                    tags
                  }
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges;

        let previousIndex = 1;
        let nextIndex = 0;
        posts.forEach((post, index) => {
          if (post.node.frontmatter.show === 'true') {
            const previous = index === posts.length - 1 ? null : posts[previousIndex++].node;
            const next = index === 0 ? null : posts[nextIndex++].node;
            createPage({
              path: post.node.frontmatter.slug || post.node.fields.slug,
              component: blogPost,
              context: {
                slug: post.node.frontmatter.slug || post.node.fields.slug,
                filePath: post.node.fields.slug,
                previous,
                next,
              },
            });
          }
        });
      }),
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
