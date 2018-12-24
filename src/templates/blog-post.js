import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import { theme, mixins, media, Main, Section } from '../style';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
  background-image: linear-gradient(to bottom, #020c1b 200px, #0a192f 550px);
`;

const HeroContainer = styled(Section)`
  ${mixins.flexCenter};
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  min-height: 100vh;
  padding-top: 200px;
  ${media.tablet`padding-top: 150px;`};
  div {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`;

const Author = styled.h3`
  display: inline;
  color: ${theme.colors.green};
  margin: 0 0 20px 3px;
  font-size: ${theme.fontSizes.medium};
  font-family: ${theme.fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${theme.fontSizes.small};`};
  ${media.tablet`font-size: ${theme.fontSizes.smallish};`};
`;

const Avatar = styled(Img)`
  width: 45px;
  max-width: 45px;
  max-height: 45px;
  vertical-align: middle;
  position: relative;
  display: inline-block;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-right: 10px;
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    return (
      <Layout location={location}>
        <MainContainer id="content">
          <HeroContainer>
            <Title>{post.frontmatter.title}</Title>
            <div>
              <Avatar fluid={post.frontmatter.authorImg.childImageSharp.fluid} alt="Avatar" />
              <Author>By {post.frontmatter.authorName}</Author>
            </div>
          </HeroContainer>
        </MainContainer>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        authorName
        authorImg {
          childImageSharp {
            fluid(maxWidth: 100, quality: 90, traceSVG: { color: "#64ffda" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
