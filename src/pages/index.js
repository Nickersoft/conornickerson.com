import React from 'react'
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
`;

const Header = styled.h1`
  color: #FFF;
  letter-spacing: 0;
  font-size: 2.5rem;
  padding: 0 10px;
  margin-top: 10px;

  @media (max-width: 700px) {
    font-size: 3em;
  }
`;

const Subheader = styled.h2`
  color: #FFF;
  display: block;
  font-size: 2rem;
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
  background: red;
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
  transform: translateX(-50%) translateY(-50%);
`;

const LandingPage = ({ data, location }) => {
  const content = data[process.env.LOCALE || 'en'];
  
  const { titleLine1, titleLine2, coverImage: { fluid: image } } = content;

  console.log(image);
  return (
    <Layout location={location}>
      <Sidebar>
        <HeaderArea>
          <Header>
            { titleLine1 }
          </Header>
          <Subheader>
            { titleLine2 }
          </Subheader>
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
    coverImage {
      fluid {
        ...GatsbyContentfulFluid_noBase64
      }
    }
  }
`

export default LandingPage
