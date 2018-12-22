import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import NavBar from './navbar'
import Footer from './footer'
import './layout.scss'

const Main = styled.main`
  display: block;
  position: relative;
  animation: animation-fade 1s ease-in-out;
  overflow: hidden;
  min-height: 100%;

  @keyframes animation-fade {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`

const Layout = ({ children, pageName, fullHeight, location }) => (
  <StaticQuery
    query={graphql`
      query {
        en: contentfulMetadata(node_locale: { eq: "en-US" }) {
          ...MetadataFragment
        }
        fr: contentfulMetadata(node_locale: { eq: "fr" }) {
          ...MetadataFragment
        }
      }
      fragment MetadataFragment on ContentfulMetadata {
        siteName
      }
    `}
    render={data => {
      const content = data[process.env.LOCALE || 'en']
      const { siteName, description, keywords } = content

      return (
        <>
          <Helmet
            title={`${pageName} | ${siteName}`}
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <NavBar location={location} />
          <Main style={fullHeight ? { height: '100%' } : {}}>{children}</Main>
          <Footer />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
