import React from 'react';
import styled from 'styled-components';

import { theme, media } from '../style';

const ImageBox = styled.div`
  display: block;
  text-align: center;
  margin-bottom: 0.5em;

  img {
    max-width: 100%;
    display: inline-block;
    border: 3px solid #fff;
  }

  .caption {
    display: block;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.medium};
  }

  &.inline-left {
    display: inline-block;
    float: left;
    width: unset;
    margin-right: 1em;
    margin-bottom: 0;
  }
`;

class Image extends React.Component {
  render() {
    const { caption, alt, src, layout } = this.props;
    console.log(this.props);

    return (
      <ImageBox className={layout}>
        <img alt={alt || caption} src={src} />
        <span className="caption">{caption}</span>
      </ImageBox>
    );
  }
}

export default Image;
