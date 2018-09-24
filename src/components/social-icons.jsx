import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components';

import Container from './container';

const SocialList = styled.ul`
  list-style: none;
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
  text-align: center;
`;

const SocialItem = styled.li`
  display: inline-block;
  font-size: 1.5em;
  margin-right: 25px;

  &:last-child {
    margin-right: 0;
  }
`;

const SocialLink = styled(Link)`
  transition: color 0.25s ease-in-out;
  color: #666;
  cursor: pointer;

  &:hover {
    color: #444;
  }
`;

const SocialIcons = ({ icons }) => (
  <SocialList>
    {icons.map(icon => (
      <SocialItem key={icon.fontAwesomeIcon}>
        <SocialLink 
          to={`/out?url=${encodeURIComponent(icon.link)}`} 
          className={`fa fa-${icon.fontAwesomeIcon}`} />
      </SocialItem>
    ))}
  </SocialList>
)

export default SocialIcons
