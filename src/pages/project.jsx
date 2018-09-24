import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Container from '../components/container';

const Header = styled.h1`
  @media (max-width: 800px) {
    font-size: 1.8em;
  }
`;

const Description = styled.p`
  text-align: center;
  margin: 0 0 25px;
`;

const Photos = styled.section`
  width: 75%;
  margin: 0 auto;
  text-align: center;

  &:last-child {
    margin-bottom: 25px;
  }
`;

const Photo = styled.img`
  display: block;
  margin: 0 auto 2em;
  width: 100%;
  max-width: 1200px;
`;

const FeaturedHeader = Description.extend`
  margin-bottom: 0;
`;

const FeaturedLogos = styled.div`
  display: block;
  width: 800px;
  text-align: center;
  margin: 0 auto 15px;
`;

const FeaturedLogo = styled.img`
  display: inline-block;
  vertical-align: middle;
  margin: 15px;
  width: 100px;
`;

const ProjectPage = ({ location, pageContext }) => {
  const { title, tagline, articlesHeader, articles } = pageContext;
  
  const images = pageContext.images || [];

  return (
    <Layout location={location}>
      <Container>
        <Header>
          { title }
        </Header>
        <Description>
          { tagline }
        </Description>
        <FeaturedHeader>
          { articlesHeader }
        </FeaturedHeader>
        <FeaturedLogos>
          { articles.map(({ link, image: { file: { url: image } }, title }) => (
            <Link key={title} to={`/out?url=${encodeURIComponent(link)}`}>
              <FeaturedLogo alt={ title } src={image} />
            </Link>
            ))
          }
        </FeaturedLogos>
        <Photos>
          { 
            images.map(({ fluid: image }) => (
              <Photo key={image.src} src={image.src} srcSet={image.srcSet} />
            ))
          }
        </Photos>
      </Container>
    </Layout>
  );
}

export default ProjectPage;
