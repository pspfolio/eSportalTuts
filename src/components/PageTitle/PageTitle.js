import React from "react";
import styled from "styled-components";
import device from "../../constants/mediaSizes";

const Heading = styled.h1`
  color: white;
  font-size: 2.5rem;
  font-weight: 500;

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
`;

const PageTitle = ({ children }) => <Heading>{children}</Heading>;

export default PageTitle;
