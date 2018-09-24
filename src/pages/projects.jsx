import React from 'react'
import { graphql } from 'gatsby';

import SectionDisplay from '../components/section-display';

const ProjectsPage = ({ data, location }) => {
  const content = data[process.env.LOCALE || 'en'];
  
  let { title, projects, socialIcons } = content;

  projects = projects.map(project => ({
    ...project,
    link: project.link || `/projects/${project.title.toLowerCase().replace(' ', '-')}`
  }));
  
  return <SectionDisplay
    title={title}
    location={location}
    socialIcons={socialIcons}
    sections={projects} />;
}

export const query = graphql`
  query {
    en: contentfulProjects(node_locale: { eq: "en-US" }) { ...ProjectsPageFragment }
    fr: contentfulProjects(node_locale: { eq: "fr" }) { ...ProjectsPageFragment }
  }
  fragment ProjectsPageFragment on ContentfulProjects {
    title,
    projects {
      title
      link
      coverImage {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
    socialIcons {
      link
      fontAwesomeIcon
    }
  }
`;

export default ProjectsPage;
