import React, { PureComponent } from 'react';

import { StaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';

import Container from './container';

const FooterContainer = styled.footer`
  background-color: #242424;
  display: block;
  overflow: visible;
  position: relative;
  text-align: center;
  width: 100%;
`;

const Credits = styled.span`
  color: #aaa;
  display: block;
  font-size: 0.8em;
  margin: 25px 0;

  p {
    margin: 0;
    padding: 0;
  }

  a {
    color: #ccc;
  }
`;

class Footer extends PureComponent {
  makeContent(data) {
    const content = data[process.env.LOCALE || 'en'];

    const {
      footer: {
        childMarkdownRemark: { html: credits },
      },
    } = content;

    return (
      <FooterContainer>
        <Container>
          <Credits dangerouslySetInnerHTML={{ __html: credits }} />
        </Container>
      </FooterContainer>
    );
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            en: contentfulNavbar(node_locale: { eq: "en-US" }) {
              ...FooterFragment
            }
            fr: contentfulNavbar(node_locale: { eq: "fr" }) {
              ...FooterFragment
            }
          }
          fragment FooterFragment on ContentfulNavbar {
            footer {
              childMarkdownRemark {
                html
              }
            }
          }
        `}
        render={this.makeContent.bind(this)}
      />
    );
  }
}

export default Footer;
