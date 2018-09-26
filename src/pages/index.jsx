import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout'

const Sidebar = styled.div`
  background: #242424;
  display: inline-block;
  height: 100%;
  overflow: hidden;
  width: 450px;
  vertical-align: top;

  @media (max-width: 500px) {
    width: 100%
  }
`;

const HeaderArea = styled.div`
  margin-top: 50%;
  transform: translateY(-25%);

  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Header = styled.h1`
  color: #FFF;
  letter-spacing: 0;
  font-size: 2.25rem;
  padding: 0 10px;
  margin-top: 10px;

  @media (max-width: 700px) {
    font-size: 3em;
  }
`;

const Subheader = styled.h2`
  color: #FFF;
  display: block;
  font-size: 1.75rem;
  letter-spacing: 0;
  margin: 10px 0 100px;
  padding: 0;

  @media (max-width: 500px) {
    font-size: 1.5em;
  }
`;

const Logo = styled.img`
  padding: 0px 80px 10px;
  width: 100%;
`;

const CoverImageContainer = styled.div`
  display: inline-block;
  width: calc(100% - 450px);
  vertical-align: top;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const CoverImage = styled.img`
  min-height: 660px;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 990px;
  transform: translateX(-50%) translateY(-50%);
`;

const Languages = styled.div`
  display: block;
  text-align: center;
`;

const Language = styled(Link)`
  transition: opacity 0.5s ease-in-out;
  border-right: 1px solid #fff;
  background-size: cover;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 1.4em;
  padding: 0 12px;
  text-transform: uppercase;
  opacity: 0.5;

  &.active {
    opacity: 1.0;
  }

  &:not(.active):hover {
    opacity: 0.75;
  }

  &:last-child {
    border: none;
    padding-right: 0;
  }
`;

const LandingPage = ({ data, location }) => {
  const content = data[process.env.LOCALE || 'en'];
  const { 
    pageName,
    titleLine1, 
    titleLine2, 
    logo: {
      fluid: logo
    },
    coverImage: { 
      fluid: image 
    }
  } = content;

  return (
    <Layout location={location} pageName={pageName}>
      <Sidebar>
        <HeaderArea>
          <Logo srcSet={logo.srcSet} />
          <Header>
            { titleLine1 }
          </Header>
          <Subheader>
            { titleLine2 }
          </Subheader>
          <Languages>
            <Language className={ process.env.LOCALE === 'en' ? 'active' : ''} to="../en">
              EN
            </Language>
            <Language className={ process.env.LOCALE === 'fr' ? 'active' : ''} to="../fr">
              FR
            </Language>
          </Languages>
        </HeaderArea>
      </Sidebar>
      <CoverImageContainer>
        <CoverImage srcSet={image.srcSet} />
      </CoverImageContainer>
    </Layout>
  );
}

export const query = graphql`
  query {
    en: contentfulHomepage(node_locale: { eq: "en-US" }) { ...LandingPageFragment }
    fr: contentfulHomepage(node_locale: { eq: "fr" }) { ...LandingPageFragment }
  }
  fragment LandingPageFragment on ContentfulHomepage {
    pageName
    titleLine1
    titleLine2
    logo {
      fluid {
        ...GatsbyContentfulFluid_noBase64
      }
    }
    coverImage {
      fluid {
        ...GatsbyContentfulFluid_noBase64
      }
    }
  }
`;

export default LandingPage
