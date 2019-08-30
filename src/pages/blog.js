import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/layout';
import BlogPosts from '../components/blogPosts';

import styled from 'styled-components';
import { mixins, Main } from '../style';

const MainContainer = styled(Main)`
  ${mixins.sidePadding};
  counter-reset: section;
  background-image: linear-gradient(to bottom, #020c1b 200px, #0a192f 550px);
  min-height: 100vh;
`;

const BlogPage = ({ data, location }) => (
  <Layout location={location} avatar={data.blogPosts.edges[0].node.frontmatter.authorImg}>
    <MainContainer id="content">
      <BlogPosts data={data.blogPosts.edges} long={true} />
    </MainContainer>
  </Layout>
);

BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
};

export default BlogPage;

export const query = graphql`
  query BlogPageQuery {
    blogPosts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 100
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            slug
            tags
            show
            authorName
            authorImg {
              childImageSharp {
                fluid(maxWidth: 30, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            featuredImg {
              childImageSharp {
                fluid(maxWidth: 300, quality: 90, traceSVG: { color: "#64ffda" }) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          timeToRead
          excerpt(pruneLength: 300)
          html
        }
      }
    }
  }
`;
