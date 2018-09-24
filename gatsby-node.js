const webpack = require('webpack');
const path = require('path')
const Img = require('gatsby-image');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const projectPage = path.resolve('src/pages/project.jsx')
    resolve(
      graphql(`
        query {
          en: allContentfulGallery(filter: { node_locale: { eq: "en-US" } }) { 
            edges {
              node {
                ...GalleryPageFragment 
              }
            }
          }
          fr: allContentfulGallery(filter: { node_locale: { eq: "fr" } }) { 
            edges {
              node {
                ...GalleryPageFragment 
              }
            }
          }
        }

        fragment GalleryPageFragment on ContentfulGallery {
          title
          images {
            fluid {
              src
              srcSet
            }
          }
        }
      `).then((result) => {
          const locale = process.env.LOCALE || 'en';
          const content = result.data[locale];

          if (result.errors) {
            reject(result.errors)
          }

          content.edges.forEach((edge) => {
            createPage({
              path: `/portfolio/${edge.node.title.toLowerCase().replace(' ', '-')}`,
              component: projectPage,
              context: edge.node
            })
          });

          return;
        })
    )
  })
}

exports.onCreateWebpackConfig = ({ plugins, actions }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env': {
          LOCALE: JSON.stringify(process.env.LOCALE || 'en')
        }
      })
    ]
  })
}