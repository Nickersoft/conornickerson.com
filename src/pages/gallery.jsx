import React, { Component } from 'react';
import styled from 'styled-components';
import Lightbox from 'react-images';

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

class GalleryPage extends Component {
  state = {
    lightboxOpen: false,
    activeImageIndex: 0,
  };

  openLightbox = index => () => {
    this.setState({
      lightboxOpen: true,
      activeImageIndex: index,
    });
  };

  goToPreviousImage() {
    this.setState({
      activeImageIndex: this.state.activeImageIndex - 1,
    });
  }

  goToNextImage() {
    this.setState({
      activeImageIndex: this.state.activeImageIndex + 1,
    });
  }

  closeLightbox() {
    this.setState({
      lightboxOpen: false,
    });
  }

  render() {
    const { location, pageContext } = this.props;
    const { lightboxOpen, activeImageIndex } = this.state;
    const { title } = pageContext;

    const images = pageContext.images || [];

    return (
      <Layout location={location} pageName={title}>
        <Container>
          <Header>{title}</Header>
          <PhotosContainer>
            <Photos>
              {images.map(({ file: { url: image } }, index) => (
                <Photo
                  onClick={this.openLightbox(index)}
                  key={image}
                  src={image}
                />
              ))}
            </Photos>
          </PhotosContainer>
        </Container>
        {lightboxOpen && (
          <Lightbox
            images={images.map(x => ({ src: x.file.url }))}
            isOpen={lightboxOpen}
            backdropClosesModal={true}
            currentImage={activeImageIndex}
            onClickPrev={this.goToPreviousImage.bind(this)}
            onClickNext={this.goToNextImage.bind(this)}
            onClose={this.closeLightbox.bind(this)}
          />
        )}
      </Layout>
    );
  }
}

export default GalleryPage;
