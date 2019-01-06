import path from 'path';
import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';
import Disqus from 'disqus-react';
import Helmet from 'react-helmet';
import rehypeReact from 'rehype-react';
import styled from 'styled-components';

import Layout from '../components/layout';
import Emoji from '../components/emoji';
import Editor from '../components/editor';
import { theme, mixins, media, Main, Section } from '../style';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
`;

const CommentsContainer = styled.div`
  .reaction-item__button {
    border-color: ${theme.colors.green};
  }
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
  font-size: ${theme.fontSizes.small};
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
  margin-top: 20px;
`;

const PostBody = styled.div`
  margin-top: 40px;
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

const Meta = styled.h3`
  display: inline;
  color: ${theme.colors.green};
  margin: 0 0 20px 3px;
  font-size: ${theme.fontSizes.small};
  font-family: ${theme.fonts.SFMono};
  font-weight: normal;
  word-wrap: break-word;
  ${media.desktop`font-size: ${theme.fontSizes.small};`};
  ${media.tablet`font-size: ${theme.fontSizes.smallish};`};
  .tag {
    margin-left: 10px;
  }
  .read-time {
    margin-right: 20px;
  }
`;

const Credits = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`;

const PostLinks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  .next {
    text-align: right;
  }
  .prevous {
    text-align: left;
  }
  .previous,
  .next {
    flex: 1;
    border-radius: 2px;
    max-width: calc(50% - 15px);
    padding: 10px 20px;
    background: #172a45;
    .title {
      color: white;
      font-size: 20px;
      margin-bottom: 0;
    }
    .pos {
      color: ${theme.colors.green};
      font-size: ${theme.fontSizes.small};
      margin-bottom: 5px;
    }
    .empty {
      text-align: center;
      margin-bottom: 0;
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    .excerpt {
      font-size: ${theme.fontSizes.large};
      margin-bottom: 0px;
    }
    ${Meta} {
      font-size: 12px;
      margin-bottom: 0;
    }
    &:hover {
      -webkit-transform: translateY(-5px);
      -ms-transform: translateY(-5px);
      transform: translateY(-5px);
      box-shadow: 0 2px 4px rgba(2, 12, 27, 0.9);
    }
  }
  ${media.tablet`
  flex-direction: column;
    .next, .previous {
      max-width: 100%;
    }

    .previous {
      margin-bottom: 20px;
    }

    .next.latest, .previous.first {
      display: none;
    }
  `}
`;

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { emoji: Emoji, editor: Editor },
}).Compiler;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const site = this.props.data.site;
    const pageContext = this.props.pageContext;
    const { previous, next } = pageContext;

    const imgUrl =
      'https://' + path.join('naman.sh/', post.frontmatter.featuredImg.childImageSharp.fluid.src);
    const pageUrl = 'https://' + path.join('naman.sh/', post.frontmatter.slug, '/');
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
              <Meta>
                <span className="read-time">
                  {post.timeToRead} Min{post.timeToRead > 1 ? 's' : ''} Read
                </span>
                {(post.frontmatter.tags || []).map(tag => (
                  <span className="tag">#{tag}</span>
                ))}
              </Meta>
            </div>
            <FeaturedImage
              fluid={post.frontmatter.featuredImg.childImageSharp.fluid}
              alt={post.frontmatter.title}
            />
            <PostBody>{renderAst(post.htmlAst)}</PostBody>
            <Credits>
              <Avatar fluid={post.frontmatter.authorImg.childImageSharp.fluid} alt="Avatar" />
              <Author>
                By {post.frontmatter.authorName} on {post.frontmatter.date}
              </Author>
            </Credits>
            <PostLinks>
              {previous ? (
                <Link className={'previous'} to={previous.frontmatter.slug}>
                  <p className="pos">{'<< previous'}</p>
                  <h3 className="title">{previous.frontmatter.title}</h3>
                  <p className="excerpt">{previous.excerpt}</p>
                  <Meta>
                    <span className="read-time">
                      {previous.timeToRead} {previous.timeToRead > 1 ? 'Mins' : 'Min'} Read
                    </span>
                    {(previous.frontmatter.tags || []).map(tag => (
                      <span className="tag">#{tag}</span>
                    ))}
                  </Meta>
                </Link>
              ) : (
                <div className="previous first">
                  <p className="empty">This is the first post.</p>
                </div>
              )}
              {next ? (
                <Link className={'next'} to={next.frontmatter.slug}>
                  <p className="pos">{'next >>'}</p>
                  <h3 className="title">{next.frontmatter.title}</h3>
                  <p className="excerpt">{next.excerpt}</p>
                  <Meta>
                    <span className="read-time">
                      {next.timeToRead} {next.timeToRead > 1 ? 'Mins' : 'Min'} Read
                    </span>
                    {(next.frontmatter.tags || []).map(tag => (
                      <span className="tag">#{tag}</span>
                    ))}
                  </Meta>
                </Link>
              ) : (
                <div className="next latest">
                  <p className="empty">This is the latest post</p>
                </div>
              )}
            </PostLinks>
            <CommentsContainer>
              <Disqus.DiscussionEmbed
                shortname={'naman-kumar'}
                config={{
                  url: 'https://naman.sh' + post.frontmatter.slug,
                  identifier: pageContext.filePath,
                  title: post.frontmatter.title,
                }}
              />
            </CommentsContainer>
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
      timeToRead
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
