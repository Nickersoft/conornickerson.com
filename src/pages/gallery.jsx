import React from 'react'
import styled from 'styled-components';

import Layout from '../components/layout';
import Container from '../components/container';

const Header = styled.h1`
  margin-bottom: 45px;

  @media (max-width: 800px) {
    font-size: 1.8em;
  }
`;

const PhotosContainer = styled.section`
  text-align: center;

  &:last-child {
    margin-bottom: 25px;
  }
`;

const Photos = styled.div`
  column-gap: 0;
  column-count: 3;
  display: block;
  line-height: 0;
  margin: 0 auto;

  @media (max-width: 800px) {
    column-count: 2;
  }

  @media (max-width: 400px) {
    column-count: 1;
  }
`;

const Photo = styled.img`
  transition: opacity 0.25s ease-in-out;
  cursor: pointer !important;
  width: 100% !important;
  height: auto !important;

  &:hover {
    opacity: 0.5;
  }
`;

const GalleryPage = ({ location, pageContext }) => {
  const { title } = pageContext;

  const images = pageContext.images || [];
  
  return (
    <Layout location={location}>
      <Container>
        <Header>
          { title }
        </Header>
        <PhotosContainer>
          <Photos>
            { 
              images.map(({ fluid: image }) => (
                <Photo key={image.src} src={image.src} srcSet={image.srcSet} />
              ))
            }
          </Photos>
        </PhotosContainer>
      </Container>
    </Layout>
  );
}

export default GalleryPage;
