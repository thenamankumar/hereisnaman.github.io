import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

const AuthorAvatar = styled(Img)`
  width: 30px;
  max-width: 30px;
  max-height: 30px;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-right: 10px;
`;

const Heading = styled('span')`
  color: #ccd6f6;
  font-weight: 600;
`;

const IconLogo = ({ avatar }) => (
  <React.Fragment>
    <AuthorAvatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
    <Heading>Naman Kumar</Heading>
  </React.Fragment>
  /*  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Logo</title>
    <g id="Logo" transform="translate(-8.000000, -2.000000)">
      <g transform="translate(11.000000, 5.000000)">
        <text
          text-anchor="start"
          font-family="Calibre,system,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,Segoe UI,Arial,sans-serif"
          font-size="60"
          y="62"
          x="21"
          stroke-width="4"
          stroke="#64FFDA"
          fill="#64FFDA">
          N
        </text>
        <polygon
          id="Shape"
          stroke="#64FFDA"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          points="39 0 0 22 0 67 39 90 78 68 78 23"
        />
      </g>
    </g>
  </svg>
  */
);

export default IconLogo;
