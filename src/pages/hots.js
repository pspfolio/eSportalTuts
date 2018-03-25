import React from "react";
import styled from "styled-components";
import PostListing from "../components/posts/PostListing";
import GamePageHeader from "../components/GamePageHeader/GamePageHeader";

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const ImgWrapper = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

const Hots = ({ data }) => {
  return (
    <div>
      <GamePageHeader
        title={"Heroes Of The Storm"}
        resolutions={data.hotsLogo.resolutions}
      />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostListing key={node.frontmatter.title} post={node} group="hots" />
      ))}
    </div>
  );
};

export default Hots;

export const query = graphql`
  query Hots {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { group: { eq: "hots" } } }
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
    hotsLogo: imageSharp(id: { regex: "/hots-logo.png/" }) {
      resolutions(width: 25) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
