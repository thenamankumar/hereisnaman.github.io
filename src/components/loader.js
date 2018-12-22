import React, { Component } from 'react';
import PropTypes from 'prop-types';

import anime from 'animejs';

import styled from 'styled-components';
import { theme, mixins } from '../style';

const LoaderContainer = styled.div`
  ${mixins.flexCenter};
  background-color: ${theme.colors.darkNavy};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
`;
const LogoWrapper = styled.div`
  width: max-content;
  max-width: 100px;
  transition: ${theme.transition};
  opacity: ${props => (props.show ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #K {
      opacity: 0;
    }
  }
`;

class Loader extends Component {
  static propTypes = {
    finishLoading: PropTypes.func.isRequired,
  };

  state = {
    show: false,
  };

  componentDidMount() {
    this.setState({ show: true }, () => {
      document.body.style.overflow = 'hidden';
      this.animate();
    });
  }

  animate() {
    const loader = anime.timeline({
      complete: () => {
        document.body.style.overflow = 'auto';
        this.props.finishLoading();
      },
    });

    loader
      .add({
        targets: '#logo path',
        delay: 500,
        duration: 2000,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #K',
        duration: 800,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        delay: 700,
        duration: 300,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  }

  render() {
    const { show } = this.state;

    return (
      <LoaderContainer className="loader">
        <LogoWrapper show={show}>
          <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            <title>Loader Logo</title>
            <g>
              <g id="K" transform="translate(11.000000, 5.000000)">
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
              </g>
              <path
                stroke="#64FFDA"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
              />
            </g>
          </svg>
        </LogoWrapper>
      </LoaderContainer>
    );
  }
}

export default Loader;
