import React, { Component } from 'react';
import styled from 'styled-components';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Container from '../components/container';

const Header = styled.h1`
  margin-bottom: 45px;

  @media (max-width: 800px) {
    font-size: 1.8em;
  }
`;

const VideoBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4rem 0;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Video = styled.div`
  height: 350px;
  flex-shrink: 0;
  width: 560px;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 1rem;
    height: 62.5vw;
  }
`;

const VideoCaption = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 2rem;
  flex-grow: 1;
  max-width: 45%;

  @media (max-width: 1000px) {
    max-width: none;
    align-items: center;
  }
`;

const VideoTitle = styled.h2`
  margin: 0;
  line-height: 1.25em;
  padding: 0;
  text-align: left;

  @media (max-width: 1000px) {
    text-align: center;
    font-size: 1.3rem;
  }
`;

const VideoYear = styled.span`
  color: #999;
  font-size: 1.2rem;
  padding: 1rem 0;
  font-weight: 700;

  @media (max-width: 1000px) {
    font-size: 1.15rem;
  }
`;

const VideoDescription = styled.p`
  text-align: left;
  padding: 0.75rem 0;
  margin: 0;
  opacity: 0.6;
  font-size: 1.15rem;
  line-height: 1.5em;

  @media (max-width: 1000px) {
    text-align: center;
    font-size: 1rem;
  }
`;

class VideosPage extends Component {
  resolveVideoIFrame(url, title) {
    let youtubeID = null;

    if (url.includes('youtu.be')) {
      const match = /http(?:s)?:\/\/youtu\.be\/([\w\d]+)/.exec(url);

      if (match !== null) {
        youtubeID = match[1];
      }
    } else if (url.includes('youtube.com')) {
      const match = /http(?:s)?:\/\/(?:www\.)?youtube\.com\/watch\?v=([\w\d]+)/.exec(
        url
      );

      if (match !== null) {
        youtubeID = match[1];
      }
    }

    if (youtubeID !== null) {
      return (
        <iframe
          width="100%"
          height="100%"
          title={title}
          src={`https://www.youtube.com/embed/${youtubeID}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    } else if (url.includes('facebook.com')) {
      return (
        <iframe
          src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
            url
          )};show_text=0&amp;width=560`}
          width="100%"
          height="100%"
          title={title}
          style={{
            border: 'none',
            overflow: 'hidden',
          }}
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          allowFullScreen
        />
      );
    }

    return null;
  }

  renderVideoBlock = ({ url, title, year, description }) => {
    const iframe = this.resolveVideoIFrame(url, title);

    return (
      <VideoBlock key={url}>
        <VideoCaption>
          <VideoYear>{year}</VideoYear>
          <VideoTitle>{title}</VideoTitle>
          <VideoDescription>{description}</VideoDescription>
        </VideoCaption>
        <Video>{iframe}</Video>
      </VideoBlock>
    );
  };

  render() {
    const { location, data } = this.props;
    const content = data[process.env.LOCALE || 'en'];

    let { pageName, title, videos } = content;
    console.log(data);
    return (
      <Layout location={location} pageName={pageName}>
        <Container>
          <Header>{title}</Header>
          {videos.map(this.renderVideoBlock)}
        </Container>
      </Layout>
    );
  }
}

export const query = graphql`
  query {
    en: contentfulVideos(node_locale: { eq: "en-US" }) {
      ...VideosFragment
    }
    fr: contentfulVideos(node_locale: { eq: "fr" }) {
      ...VideosFragment
    }
  }

  fragment VideosFragment on ContentfulVideos {
    pageName
    title
    videos {
      title
      year
      description
      url
    }
  }
`;

export default VideosPage;
