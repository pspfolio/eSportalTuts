import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import PostListing from '../components/posts/PostListing';

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 500;
  margin-left: 20px;
`;

const Hots = ({ data }) => {
  return (
    <div>
      <Heading>
        <Img resolutions={data.csgoLogo.resolutions} />
        <Title>Counter-Strike Global Offensive</Title>
      </Heading>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostListing key={node.frontmatter.title} post={node} group="csgo" />
      ))}
    </div>
  );
};

export default Hots;

export const query = graphql`
  query Csgo {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { group: { eq: "csgo" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            group
            snippet
            tags
            author
            img
            attachments {
              publicURL
            }
          }
          fields {
            slug
          }
        }
      }
    }
    csgoLogo: imageSharp(id: { regex: "/csgo-logo.png/" }) {
      resolutions(width: 101) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
