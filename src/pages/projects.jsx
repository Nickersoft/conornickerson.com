import React from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import Container from '../components/container';
import Button from '../components/button';

const Header = styled.h1`
  @media (max-width: 800px) {
    font-size: 1.8em;
  }
`;

const ProjectContainer = styled(Container)`
  margin-bottom: 0;
`;

const Project = styled.section`
  width: calc(50% - 5px);
  transition: opacity 0.25s ease-in-out;
  background-size: cover;
  display: block;
  cursor: pointer;
  float: left;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;

  &:hover {
    opacity: 0.75;
  }

  &:nth-child(odd) {
    float: right;
  }
`;

const ProjectLink = styled.a`
  color: #fff;
  display: block;
  font-size: 2.2em;
  font-weight: 300;
  letter-spacing: 6px;
  margin-top: 10px;
  padding: 90px 0;
  z-index: 999;
  position: relative;
`;

const ProjectBackground = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const makeProject = (project, index, projects) => {
  const { name, link, coverImage: { fluid } } = project;

  const additionalStyles = {};

  if (index === projects.length - 1 && projects.length % 2 !== 0) {
    additionalStyles['width'] = '100%';
  }

  return (
    <Project style={additionalStyles}>
      <ProjectLink to={ link }>{ name }</ProjectLink>
      <ProjectBackground src={ fluid.src } srcSet={ fluid.srcSet } />
    </Project>
  );
};

const ProjectsPage = ({ data, location }) => {
  const content = data[process.env.LOCALE || 'en'];
  const { title, projects } = content;

  return (
    <Layout location={location}>
      <ProjectContainer>
        <Header>
          { title }
        </Header>
      </ProjectContainer>
      { projects.map((p, i) => makeProject(p, i, projects)) }
    </Layout>
  );
}

export const query = graphql`
  query {
    en: contentfulProjects(node_locale: { eq: "en-US" }) { ...ProjectsPageFragment }
    fr: contentfulProjects(node_locale: { eq: "fr" }) { ...ProjectsPageFragment }
  }
  fragment ProjectsPageFragment on ContentfulProjects {
    title,
    projects {
      name
      link
      coverImage {
        fluid {
          ...GatsbyContentfulFluid_noBase64
        }
      }
    }
  }
`;

export default ProjectsPage;
