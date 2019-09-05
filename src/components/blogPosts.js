import React, { Component } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import config from '../config';

import { IconGithub, IconExternal } from './icons';

import styled from 'styled-components';
import { theme, mixins, media, Section, H3, Ul, A, Button } from '../style';

import ScrollReveal from 'scrollreveal';

const BlogPostsContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
`;

const BlogPostsTitle = styled.h4`
  margin: 0 auto 50px;
  font-size: ${theme.fontSizes.h3};
  ${media.tablet`font-size: 24px;`};
  a {
    display: block;
  }
`;

const BlogPostsGrid = styled.div`
  .blogPosts {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    ${media.desktop`
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    `};
  }
`;

const PostExcerpt = styled.div`
  position: relative;
  padding: 25px;
  margin-top: 15px;
  margin-bottom: 10px;
  width: 100%;
  font-size: 20px;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  background-color: ${theme.colors.lightNavy};
  a {
    color: ${theme.colors.green};
  }
`;

const PicContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;

const Avatar = styled(Img)`
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  position: relative;
  mix-blend-mode: multiply;
  filter: grayscale(100%) contrast(1);
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;

const AvatarContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.green};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${Avatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: ${theme.transition};
    background-color: ${theme.colors.navy};
    mix-blend-mode: screen;
    border-radius: ${theme.borderRadius};
  }
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border: 2px solid ${theme.colors.green};
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: -1;
    transition: ${theme.transition};
    border-radius: ${theme.borderRadius};
  }
`;

const BlogPost = styled.div`
  display: flex;
  margin-bottom: 40px;
  transition: ${theme.transition};
  &:hover,
  &:focus {
    ${PostExcerpt} {
      transform: translateY(-5px);
      box-shadow: 0 0 140px rgba(255, 255, 255, 0.05);
    }
    ${AvatarContainer} {
      background: transparent;
      &:after {
        top: 15px;
        left: 15px;
      }
      ${Avatar} {
        filter: none;
        mix-blend-mode: normal;
      }
    }
  }
  .left {
    flex: 7;
  }
  .right {
    flex 3;
  }
  ${media.tablet`
    display: block;
    .right {
      display: none;
    }
  `};
`;

const PostTitle = styled.h5`
  max-width: 100%;
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: ${theme.colors.lightestSlate};
  ${media.tablet`font-size: 24px;`};
  a {
    ${media.tablet`display: block;`};
  }
`;

const Meta = styled.h3`
  display: inline;
  color: ${theme.colors.green};
  margin: 0 0 20px 3px;
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${theme.fontSizes.small};`};
  ${media.tablet`font-size: ${theme.fontSizes.smallish};`};
  .tag {
    margin-left: 10px;
  }
  .read-time {
    margin-right: 20px;
    display: inline-block;
  }
`;

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

const ShowMoreButton = styled(Button)`
  ${mixins.bigButton};
  margin: 100px auto 0;
`;

class BlogPosts extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.revealRefs = [];
    this.GRID_LIMIT = props.long ? 100 : 6;
  }

  componentDidMount() {
    ScrollReveal().reveal(this.featured, config.srConfig());
    this.revealRefs.forEach(ref => ScrollReveal().reveal(ref, config.srConfig()));
  }

  render() {
    const { data, long } = this.props;
    const blogPosts = data.filter(
      ({ node }, index) => node.frontmatter.show === 'true' && index < this.GRID_LIMIT,
    );

    if (!blogPosts.length) {
      return null;
    }

    return (
      <BlogPostsContainer id="blog">
        <BlogPostsGrid>
          <TransitionGroup className="blog-posts">
            {blogPosts.map(({ node }, i) => (
              <CSSTransition
                key={i}
                classNames="fadeup"
                timeout={i >= this.GRID_LIMIT ? (i - this.GRID_LIMIT) * 300 : 300}
                exit={false}>
                <BlogPost
                  key={i}
                  innerRef={el => (this.revealRefs[i] = el)}
                  style={{
                    transitionDelay: `${i >= this.GRID_LIMIT ? (i - this.GRID_LIMIT) * 100 : 0}ms`,
                  }}>
                  <div className="left">
                    <PostTitle>
                      <Link to={node.frontmatter.slug + '/'}>
                        {node.frontmatter.title.slice(0, 110)}
                        {node.frontmatter.title.length > 110 ? '...' : ''}
                      </Link>
                    </PostTitle>
                    <div>
                      <Meta>
                        <span className="read-time">
                          {node.timeToRead} Min{node.timeToRead > 1 ? 's' : ''} Read
                        </span>
                        {(node.frontmatter.tags || []).map(tag => (
                          <span className="tag">#{tag}</span>
                        ))}
                      </Meta>
                    </div>
                    <PostExcerpt>
                      {node.excerpt} <Link to={node.frontmatter.slug + '/'}>Read more >></Link>
                    </PostExcerpt>
                    <div>
                      <AuthorAvatar
                        fluid={node.frontmatter.authorImg.childImageSharp.fluid}
                        alt="Avatar"
                      />
                      <Meta>
                        By {node.frontmatter.authorName} on {node.frontmatter.date}
                      </Meta>
                    </div>
                  </div>
                  <div className="right">
                    <PicContainer>
                      <AvatarContainer>
                        <Avatar
                          fluid={node.frontmatter.featuredImg.childImageSharp.fluid}
                          alt="Avatar"
                        />
                      </AvatarContainer>
                    </PicContainer>
                  </div>
                </BlogPost>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </BlogPostsGrid>
        {!long && (
          <ShowMoreButton
            onClick={() => {
              window.location.pathname = '/blog/';
            }}>
            More Posts
          </ShowMoreButton>
        )}
      </BlogPostsContainer>
    );
  }
}

export default BlogPosts;
