import React from 'react'
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import Container from '../components/container';
import SocialIcons from '../components/social-icons';

const Connect = styled.div`
  transform: translateY(-75%) translateX(-50%);
  position: absolute;
  left: 50%;
  top: 50%;
`;

const Header = styled.h1`
  margin-bottom: 25px;
`;

const ConnectPage = ({ data, location }) => {
  const content = data[process.env.LOCALE || 'en'];
  const { title, socialIcons } = content;

  return (
    <Layout location={location}>
      <Container>
        <Connect>
          <Header>
            { title }
          </Header>
          <SocialIcons icons={ socialIcons } />
        </Connect>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query {
    en: contentfulConnect(node_locale: { eq: "en-US" }) { ...ConnectPageFragment }
    fr: contentfulConnect(node_locale: { eq: "fr" }) { ...ConnectPageFragment }
  }
  fragment ConnectPageFragment on ContentfulConnect {
    pageName
    title
    socialIcons {
      link
      fontAwesomeIcon
    }
  }
`;

export default ConnectPage;
