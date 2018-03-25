import React, { Component } from "react";
import styled from "styled-components";
import ChipsList from "../components/chips/ChipsList";
import device from "../constants/mediaSizes";

const Articel = styled.article`
  max-width: 700px;
  margin: 0 auto;
  overflow: hidden;
`;

const Title = styled.h1`
  color: #fff;
`;

const SubTitle = styled.h3`
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
`;

const PostedDate = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
`;

const ArticleContent = styled.div`
  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5rem;
    font-size: 0.9rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: white;
  }

  img {
    margin: 2rem 0;
    width: 100%;
  }

  ul {
    padding-left: 0;
    li {
      list-style: none;
      padding: 0.2rem;
      a {
        color: #00e871;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: all 0.2s ease-in-out;
        &:hover {
          border-color: #00e871;
        }
      }
    }
  }
`;

class PostPage extends Component {
  render() {
    const { data } = this.props;
    const frontmatter = this.props.data.markdownRemark.frontmatter;
    return (
      <Articel>
        <Title>{frontmatter.title}</Title>

        <SubTitle>{frontmatter.snippet}</SubTitle>
        <ChipsList tags={frontmatter.tags} group={frontmatter.group} />

        <PostedDate>
          Posted in Heroes of the Storm by Peppe - March 3, 2018
        </PostedDate>
        <ArticleContent
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark.html
          }}
        />
      </Articel>
    );
  }
}

export default PostPage;

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        snippet
        tags
        group
      }
    }
  }
`;
