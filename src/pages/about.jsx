import React from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/layout'
import Container from '../components/container';
import Button from '../components/button';

const About = styled.div`
  display: block;
  position: relative;
  margin: 50px auto;
  text-align: center;
  width: 400px;

  @media (max-width: 400px) {
    transform: none;
    margin-top: 25px;
    margin-bottom: 100px;
    padding: 0 10px;
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const Header = styled.h1`
  margin-bottom: 25px;
`;

const Description = styled.div`
  text-align: justify;
`;

const ConnectButton = styled(Button)`
  display: inline-block;
  margin-top: 25px;
`;

const AboutPage = ({ data, location }) => {
  const content = data[process.env.LOCALE || 'en'];
  const {
    title,
    description: {
      childMarkdownRemark: {
        html: description
      }
    },
    buttonText,
    buttonLink
  } = content;

  return (
    <Layout location={location}>
      <Container>
        <About>
          <Header>
            { title }
          </Header>
          <Description dangerouslySetInnerHTML={{ __html: description }}>
          </Description>
          <ConnectButton to={buttonLink}>
            { buttonText }
          </ConnectButton>
        </About>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query {
    en: contentfulAbout(node_locale: { eq: "en-US" }) { ...AboutPageFragment }
    fr: contentfulAbout(node_locale: { eq: "fr" }) { ...AboutPageFragment }
  }
  fragment AboutPageFragment on ContentfulAbout {
    pageName
    title
    description {
      childMarkdownRemark {
        html
      }
    }
    buttonText
    buttonLink
  }
`;

export default AboutPage;
