import React, { Component } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Container from './container';

const NavBarContainer = styled.nav`
  background-color: #242424;
  display: block;
  overflow: visible;
  position: relative;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 0;
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

const NavigationItem = styled.div`
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
  padding: 10px 25px;
  text-align: right;
  width: 100%;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const HamburgerIcon = styled.span`
  color: #fff;
`;

const MobileNavigation = styled.ul`
  background: #242424;
  left: 0;
  top: 1.5rem;
  padding: 1rem 0;
  position: absolute;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
    text: page.pageName,
  };
};

const determineCurrent = ({ location, href }) => {
  const linkPath = location.pathname.replace(/\//g, '');
  const currentPath = href.replace(/\//g, '');
  return currentPath === linkPath ? { style: { color: '#fff' } } : null;
};

class NavBar extends Component {
  state = {
    mobileNavOpen: false,
  };

  makeContent(location) {
    const { mobileNavOpen } = this.state;

    return data => {
      const content = data[process.env.LOCALE || 'en'];
      const links = content.pages.map(getLinkForPage, location);

      return (
        <NavBarContainer>
          <MobileNavigation
            style={{ display: mobileNavOpen ? 'block' : 'none' }}
          >
            {links.map(link => (
              <MobileNavigationItem key={link.key}>
                <NavigationLink to={link.url} getProps={determineCurrent}>
                  {link.text}
                </NavigationLink>
              </MobileNavigationItem>
            ))}
          </MobileNavigation>
          <Container>
            <Hamburger>
              <HamburgerIcon
                onClick={this.toggleMobileNav.bind(this)}
                className="fa fa-bars"
              />
            </Hamburger>
            <Navigation>
              {links.map(link => (
                <NavigationItem key={link.key}>
                  <NavigationLink to={link.url} getProps={determineCurrent}>
                    {link.text}
                  </NavigationLink>
                </NavigationItem>
              ))}
            </Navigation>
          </Container>
        </NavBarContainer>
      );
    };
  }

  toggleMobileNav() {
    this.setState({
      mobileNavOpen: !this.state.mobileNavOpen,
    });
  }

  render() {
    const { location } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            en: contentfulNavbar(node_locale: { eq: "en-US" }) {
              ...NavbarFragment
            }
            fr: contentfulNavbar(node_locale: { eq: "fr" }) {
              ...NavbarFragment
            }
          }
          fragment NavbarFragment on ContentfulNavbar {
            name
            pages {
              ... on ContentfulHomepage {
                pageName
              }
              ... on ContentfulAbout {
                pageName
              }
              ... on ContentfulProjects {
                pageName
              }
              ... on ContentfulPortfolio {
                pageName
              }
              ... on ContentfulVideos {
                pageName
              }
              ... on ContentfulConnect {
                pageName
              }
            }
          }
        `}
        render={this.makeContent(location).bind(this)}
      />
    );
  }
}

export default NavBar;
