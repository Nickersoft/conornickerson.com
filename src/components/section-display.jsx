import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '../components/layout'
import Container from '../components/container';
import SocialIcons from '../components/social-icons';

const Header = styled.h1`
  @media (max-width: 800px) {
    font-size: 1.8em;
  }
`;

const SectionContainer = styled(Container)`
  margin-bottom: 0;
`;

const Section = styled.section`
  width: calc(50% - 5px);
  transition: opacity 0.25s ease-in-out;
  background-size: cover;
  display: block;
  cursor: pointer;
  float: left;
  margin-bottom: 10px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;

  &:hover {
    opacity: 0.75;
  }

  &:nth-child(odd) {
    float: right;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const SectionLink = styled(Link)`
  color: #fff;
  display: block;
  font-size: 2.2em;
  font-weight: 300;
  letter-spacing: 6px;
  margin-top: 10px;
  padding: 5.6rem 0;
  z-index: 999;
  position: relative;

  @media (max-width: 500px) {
    padding: 3rem;
  }
`;

const SectionBackground = styled.img`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const makeSection = (section, index, sections) => {
  let { title, link, coverImage: { fluid } } = section;

  const additionalStyles = {};

  if (index === sections.length - 1 && sections.length % 2 !== 0) {
    additionalStyles['width'] = '100%';
  }

  if (/^http(?:s?):\/\//.test(link)) {
    link = `/out?url=${encodeURIComponent(link)}`;
  }

  return (
    <Section style={additionalStyles} key={link}>
      <SectionLink to={ link }>{ title }</SectionLink>
      <SectionBackground src={ fluid.src } srcSet={ fluid.srcSet } />
    </Section>
  );
};

const SectionsPage = ({ title, socialIcons, sections, location }) => {
  return (
    <Layout location={location} pageName={title}>
      <SectionContainer>
        <Header>
          { title }
        </Header>
        <br/>
        <SocialIcons icons={ socialIcons }></SocialIcons>
      </SectionContainer>
      { sections.map((s, i) => makeSection(s, i, sections)) }
    </Layout>
  );
}

export default SectionsPage;
