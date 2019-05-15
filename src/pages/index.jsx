import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const Sidebar = styled.div`
  background: #242424;
  height: 100%;
  overflow: hidden;
  width: 450px;
  vertical-align: top;

  @media (max-width: 500px) {
    width: 100%;
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
  color: #fff;
  letter-spacing: 0;
  font-size: 2.25rem;
  padding: 0 10px;
  margin-top: 10px;

  @media (max-width: 700px) {
    font-size: 3em;
  }
`;

const Subheader = styled.h2`
  color: #fff;
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

const CoverImage = styled.div`
  display: inline-block;
  width: calc(100% - 450px);
  vertical-align: top;
  overflow: hidden;
  position: relative;
  background-position: center;
  background-size: cover;
`;

const Languages = styled.div`
  display: block;
  text-align: center;
`;

const Language = styled.a`
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
    opacity: 1;
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
    logo: { fluid: logo },
    coverImage: {
      file: { url: image },
    },
  } = content;

  return (
    <Layout fullHeight location={location} pageName={pageName}>
      <FlexContainer>
        <Sidebar>
          <HeaderArea>
            <Logo srcSet={logo.srcSet} />
            <Header>{titleLine1}</Header>
            <Subheader>{titleLine2}</Subheader>
            <Languages>
              <Language
                className={process.env.LOCALE === 'en' ? 'active' : ''}
                href="/en"
              >
                EN
              </Language>
              <Language
                className={process.env.LOCALE === 'fr' ? 'active' : ''}
                href="/fr"
              >
                FR
              </Language>
            </Languages>
          </HeaderArea>
        </Sidebar>
        <CoverImage style={{ backgroundImage: `url('${image}')` }} />
      </FlexContainer>
    </Layout>
  );
};

export const query = graphql`
  query {
    en: contentfulHomepage(node_locale: { eq: "en-US" }) {
      ...LandingPageFragment
    }
    fr: contentfulHomepage(node_locale: { eq: "fr" }) {
      ...LandingPageFragment
    }
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
      file {
        url
      }
    }
  }
`;

export default LandingPage;
