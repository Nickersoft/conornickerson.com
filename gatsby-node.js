const webpack = require('webpack');
const path = require('path')
const Img = require('gatsby-image');

const createPages = (graphql, createPage, query, template, prefix, skipIfLink = false) => {
  const resolvedTemplate = path.resolve(template)
  
  return new Promise((resolve, reject) => {
    graphql(query).then((result) => {
        const locale = process.env.LOCALE || 'en';
        const content = result.data[locale];

        if (result.errors) {
          reject(result.errors)
        }

        content.edges.forEach((edge) => {
          if ((skipIfLink && !edge.node.link) || !skipIfLink) {
            createPage({
              path: `/${prefix}/${edge.node.title.toLowerCase().replace(' ', '-')}`,
              component: resolvedTemplate,
              context: edge.node
            });
          }
        });

        resolve();
      }
    );
  });
}

const createProjectPages = (graphql, createPage) => {
  const template = 'src/pages/project.jsx';
  const prefix = 'projects';
  const query = `
    query {
      en: allContentfulProject(filter: { node_locale: { eq: "en-US" } }) { 
        edges {
          node {
            ...ProjectPageFragment 
          }
        }
      }
      fr: allContentfulProject(filter: { node_locale: { eq: "fr" } }) { 
        edges {
          node {
            ...ProjectPageFragment 
          }
        }
      }
    }

    fragment ProjectPageFragment on ContentfulProject {
      title
      tagline
      link
      articlesHeader
      coverImage {
        file {
          url
        }
      }
      images {
        file {
          url
        }
      }
      articles {
        title
        link
        image {
          file {
            url
          }
        }
      }
    }
  `;

  return createPages(graphql, createPage, query, template, prefix, true);
}

const createGalleryPages = (graphql, createPage) => {
  const template = 'src/pages/gallery.jsx';
  const prefix = 'portfolio';
  const query = `
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
        file {
          url
        }
      }
    }
  `;

  return createPages(graphql, createPage, query, template, prefix);
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return Promise.all([
    createGalleryPages(graphql, createPage),
    createProjectPages(graphql, createPage)
  ]);
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