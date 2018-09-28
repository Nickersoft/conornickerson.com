import React, { Component } from 'react'
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

const MobileNavigation = styled.ul`
  background: #242424;
  left: 0;
  padding: 1rem 0;
  position: absolute;
  transform: translateY(-100%);
  width: 100%;
  z-index: 9999;
`;

const MobileNavigationItem = styled.li`
  margin-bottom: 4px;
  text-align: center;
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

class NavBar extends Component {
  state = {
    mobileNavOpen: false
  };

  makeContent(location) {
    const { mobileNavOpen } = this.state;

    return (data) => {
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
          <MobileNavigation style={{ display: mobileNavOpen ? 'block' : 'none' }}>
            {links.map(link => (
              <MobileNavigationItem key={link.key}>
                <NavigationLink to={link.url} getProps={determineCurrent}>
                  {link.text}
                </NavigationLink>
              </MobileNavigationItem>))}
          </MobileNavigation>
          <Container>
            <Hamburger>
              <HamburgerIcon 
                onClick={this.toggleMobileNav.bind(this)}
                className="fa fa-bars">
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
  }

  toggleMobileNav() {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen
    });
  }

  render() {
    const { location } = this.props;
    return (
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
        render={this.makeContent(location).bind(this)}
      />
    )
  }
}

export default NavBar
