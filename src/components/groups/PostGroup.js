import React from "react";
import styled from "styled-components";
import PostListing from "../posts/PostListing";
import Img from "gatsby-image";
import device from "../../constants/mediaSizes";

const GroupHeader = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
`;

const GroupTitle = styled.h2`
  margin-left: 10px;
  font-size: 1rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
`;

const PostGroup = ({ data, groupName, title, logo }) => {
  return (
    <div>
      <GroupHeader>
        <Img resolutions={logo} /> <GroupTitle>in {title}</GroupTitle>
      </GroupHeader>
      {data.map(({ node }) => (
        <PostListing
          key={node.frontmatter.title}
          post={node}
          group={groupName}
        />
      ))}
    </div>
  );
};

export default PostGroup;
