import path from 'path';
import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import Disqus from 'disqus-react';
import Helmet from 'react-helmet';
import rehypeReact from 'rehype-react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Emoji from '../components/emoji';
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

const FeaturedImage = styled(Img)`
  width: 100%;
  vertical-align: middle;
  position: relative;
  border: 3px solid #fff;
  margin-top: 40px;
`;

const PostBody = styled.div`
  margin: 40px 0;
  strong {
    color: white;
  }
  .emoji {
    margin-right: 5px;
    img {
      vertical-align: middle;
    }
  }
  ul {
    list-style-type: '# ';
    li {
      margin-block-end: 0.5em;
      margin-block-start: 0.5em;
    }
  }
  a {
    color: ${theme.colors.green};
  }
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { emoji: Emoji },
}).Compiler;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const site = this.props.data.site;
    const pageContext = this.props.pageContext;

    const imgUrl = path.join(
      site.siteMetadata.siteUrl,
      post.frontmatter.featuredImg.childImageSharp.fluid.src,
    );
    const pageUrl = path.join(site.siteMetadata.siteUrl, post.frontmatter.slug, '/');
    const pageTitle = post.frontmatter.title + ' | ' + site.siteMetadata.title;
    const pageDescription = post.excerpt;

    return (
      <Layout location={this.props.location}>
        <Helmet>
          <title itemProp="name" lang="en">
            {pageTitle}
          </title>
          <meta name="description" content={pageDescription} />
          <meta name="keywords" content={(post.frontmatter.tags || []).join(',')} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:site_name" content={site.siteMetadata.title} />
          <meta property="og:image" content={imgUrl} />
          <meta itemProp="name" content={site.siteMetadata.title} />
          <meta itemProp="description" content={pageDescription} />
          <meta itemProp="image" content={imgUrl} />
          <meta name="twitter:url" content={pageUrl} />
          <meta name="twitter:title" content={pageTitle} />
          <meta name="twitter:description" content={pageDescription} />
          <meta name="twitter:image:src" content={imgUrl} />
          <meta name="twitter:image:alt" content={pageTitle} />
        </Helmet>
        <MainContainer id="content">
          <HeroContainer>
            <Title>{post.frontmatter.title}</Title>
            <div>
              <Avatar fluid={post.frontmatter.authorImg.childImageSharp.fluid} alt="Avatar" />
              <Author>
                By {post.frontmatter.authorName} at {post.frontmatter.date}
              </Author>
            </div>
            <FeaturedImage
              fluid={post.frontmatter.featuredImg.childImageSharp.fluid}
              alt={post.frontmatter.title}
            />
            <PostBody>{renderAst(post.htmlAst)}</PostBody>
            <Disqus.DiscussionEmbed
              shortname={'naman-kumar'}
              config={{
                url: 'https://naman.sh' + post.frontmatter.slug,
                identifier: pageContext.filePath,
                title: post.frontmatter.title,
              }}
            />
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
        siteUrl
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        slug
        show
        tags
        date
        authorName
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90, traceSVG: { color: "#64ffda" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              src
            }
          }
        }
        authorImg {
          childImageSharp {
            fluid(maxWidth: 30, quality: 90, traceSVG: { color: "#64ffda" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`;
