import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components';

import NavBar from './navbar'
import './layout.scss'

const Main = styled.main`
  height: calc(100% - 30px - 1em);
  max-height: calc(100% - 32px - 1em);
  display: block;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  animation: animation-fade 1s ease-in-out;

  @keyframes animation-fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
const Layout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Main>
          {children}
        </Main>
        <NavBar location={location} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
