import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import PostListing from '../components/posts/PostListing';
import PostGroup from '../components/groups/PostGroup';

const Heading = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 50px;
`;

const IndexPage = ({ data }) => {
  console.log(data);
  const hotsBlogs = data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.group === 'hots').slice(0, 3);
  const csgoBlogs = data.allMarkdownRemark.edges.filter(post => post.node.frontmatter.group === 'csgo').slice(0, 3);
  const hotsLogo = data.hotsLogo.resolutions;
  const csgoLogo = data.csgoLogo.resolutions;
  return (
    <div>
      <Heading>New tutorials</Heading>
      <PostGroup data={hotsBlogs} logo={hotsLogo} groupName="hots" title="Heroes of the Storm" />
      <PostGroup data={csgoBlogs} logo={csgoLogo} groupName="csgo" title="Counter-Strike Global Offensive" />
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query SiteMeta {
    allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date], order: DESC }) {
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
    hotsLogo: imageSharp(id: { regex: "/hots-logo.png/" }) {
      resolutions(width: 22) {
        ...GatsbyImageSharpResolutions
      }
    }
    csgoLogo: imageSharp(id: { regex: "/csgo-logo.png/" }) {
      resolutions(width: 101) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
