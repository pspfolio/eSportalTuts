import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import PageTitle from "../PageTitle/PageTitle";

const Heading = styled.div`
  display: flex;
  align-items: center;
`;

const ImgWrapper = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

const GamePageHeader = ({ title, resolutions }) => (
  <Heading>
    <ImgWrapper>
      <Img resolutions={resolutions} />
    </ImgWrapper>
    <PageTitle>{title}</PageTitle>
  </Heading>
);

export default GamePageHeader;
