import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components';

import Container from './container';

const Footer = styled.footer`
  background-color: #242424;
  display: block;
  overflow: visible;
  position: relative;
  text-align: center;
  width: 100%;
`;

const Navigation = styled.ul`
  margin: 0;
  padding: 15px 0;
  text-align: center;
  list-style: none;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const NavigationItem = styled.nav`
  color: #fff;
  display: inline-block;
  margin: 0 50px;
`;

const NavigationLink = styled(Link)`
  transition: all 0.25s ease-in-out;
  color: #ccc;
  font-size: 0.8em;
  font-weight: lighter;
  letter-spacing: 4px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #fff;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.25em;
  padding: 15px 25px 0;
  text-align: right;
  width: 100%;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const HamburgerIcon = styled.span`
  color: #fff;
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

const getLinkForPage = (page, location) => {
  var type = page.__typename.replace('Contentful', '').toLowerCase();
  var url = `/${type === 'homepage' ? '' : type}`;

  return {
    url,
    external: false,
    key: type,
    text: page.pageName
  };
}

const determineCurrent = ({ location, href }) => {
  const linkPath = location.pathname.replace(/\//g, '');
  const currentPath = href.replace(/\//g, '');
  return (currentPath === linkPath) ? { style: { color: '#fff' } } : null;
}

const makeContent = (location) => (data) => {
  const content = data[process.env.LOCALE || 'en'];
  const { footer: { childMarkdownRemark: { html: credits } } } = content;
  const links = content.pages.map(getLinkForPage, location);
  const insertAfterIndex = content.pages.map(x => x.__typename).indexOf(content.insertLinksAfter.__typename);
  
  const externalLinks = content.externalLinks.map(({ text, url }) => ({
    url: encodeURIComponent(`out?url=${url}`),
    text,
    external: true,
    key: url
  }));
  
  if (insertAfterIndex >= 0) {
    links.splice(
      insertAfterIndex + 1,
      0,
      ...externalLinks
    );
  }

  return (
    <Footer>
      <Container>
        <Hamburger>
          <HamburgerIcon className="fa fa-bars" id="mobile_nav_toggle">
          </HamburgerIcon>
        </Hamburger>
        <Navigation>
          {links.map(link => (
            <NavigationItem key={link.key}>
              <NavigationLink to={link.url} getProps={determineCurrent}>
                {link.text}
              </NavigationLink>
            </NavigationItem>))}
        </Navigation>
        <Credits dangerouslySetInnerHTML={{ __html: credits }}>
        </Credits>
      </Container>
    </Footer>
  );
}

const NavBar = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        en: contentfulNavbar(node_locale: { eq: "en-US" }) { ...NavbarFragment }
        fr: contentfulNavbar(node_locale: { eq: "fr" }) { ...NavbarFragment }
      }
      fragment NavbarFragment on ContentfulNavbar {
        name
        footer {
          childMarkdownRemark {
            html
          }
        }
        pages {
          ...on ContentfulHomepage { pageName },
          ...on ContentfulAbout { pageName },
          ...on ContentfulProjects { pageName },
          ...on ContentfulPortfolio { pageName },
          ...on ContentfulConnect { pageName },
        }
        externalLinks {
          text 
          url
        }
        insertLinksAfter {
          __typename
        }
      }
    `}
    render={makeContent(location)}
  />
)

export default NavBar
