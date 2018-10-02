import React from 'react'
import { graphql } from 'gatsby';

import SectionDisplay from '../components/section-display';

const PortfolioPage = ({ data, location }) => {
  const content = data[process.env.LOCALE || 'en'];
  const { title, galleries, socialIcons, otherWorkLink, otherWorkTitle, otherWorkBackground } = content;
  
  const sections = [
    ...galleries.map(gallery => ({
      ...gallery,
      link: `/portfolio/${gallery.title.toLowerCase().replace(' ', '-')}`
    })),
    {
      title: otherWorkTitle,
      link: otherWorkLink,
      coverImage: otherWorkBackground
    }
  ];

  return <SectionDisplay
    title={title}      
    location={location}
    socialIcons={socialIcons}
    sections={sections} />;
}

export const query = graphql`
  
  query {
    en: contentfulPortfolio(node_locale: { eq: "en-US" }) { ...PortfolioPageFragment }
    fr: contentfulPortfolio(node_locale: { eq: "fr" }) { ...PortfolioPageFragment }
  }

  fragment PortfolioPageFragment on ContentfulPortfolio {
    title,
    otherWorkTitle
    otherWorkLink
    otherWorkBackground {
      file {
        url
      }
    }
    galleries {
      title
      coverImage {
        file {
          url
        }
      }
    }
    socialIcons {
      link
      fontAwesomeIcon
    }
  }
`;

export default PortfolioPage;
