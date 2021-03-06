import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Chips from "../chips/ChipsList";
import device from "../../constants/mediaSizes";

const titles = {
  hots: "Heroes of the Storm",
  csgo: "Counter-Strike Global Offensive"
};

const ArticleCard = styled.article`
  max-width: 770px;
  height: 220px;
  background-color: #1a1a1a;
  border-radius: 5px;
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 220px 1fr;
  box-shadow: -6px 6px 15.04px 0.96px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.3s ease-in-out;
  will-change: box-shadow;

  &:hover {
    box-shadow: -6px 6px 15.04px 0.96px rgba(0, 0, 0, 0.42);
  }

  @media ${device.tablet} {
    display: flex;
  }
`;

const ImageSection = styled.div`
  width: 220px;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media ${device.tablet} {
    display: none;
  }
`;

const ContentSection = styled.div`
  margin: 0 25px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const CardHeader = styled.h3`
  font-weight: 700;
  font-size: 1.3rem;
  margin: 25px 0;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Snippet = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

const Footer = styled.p`
  margin: 0;
  position: absolute;
  bottom: 20px;
  font-size: 0.8rem;
`;

const Author = styled.span`
  color: white;
`;

const GameTitle = styled.span`
  color: ${props => (props.title === "hots" ? "#5f4488" : "#ff7800")};
`;

const PostListing = ({ post, group }) => {
  return (
    <ArticleCard>
      <ImageSection>
        <img src={post.frontmatter.attachments[0].publicURL} />
      </ImageSection>
      <ContentSection>
        <CardHeader>
          <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
        </CardHeader>
        <Snippet>{post.frontmatter.snippet}</Snippet>
        <Chips tags={post.frontmatter.tags} group={group} />
        <Footer>
          <GameTitle title={group}>{titles[group]}</GameTitle>{" "}
          <Author>- {post.frontmatter.author}</Author>
        </Footer>
      </ContentSection>
    </ArticleCard>
  );
};

export default PostListing;
