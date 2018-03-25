import React from "react";
import styled from "styled-components";
import device from "../../constants/mediaSizes";

const IconWrapper = styled.svg`
  width: 32px;
  height: 16px;
  position: absolute;
  left: 20px;
  fill: rgba(0, 232, 113, 0.8);
  display: none;

  @media ${device.tablet} {
    display: inline-block;
  }
`;

const HamburgerIcon = ({ openMobileNavigation }) => (
  <IconWrapper onClick={openMobileNavigation}>
    <g id="Group">
      <rect
        id="Rectangle"
        x="0"
        y="0"
        width="24.742268"
        height="3.13402062"
        rx="1.56701031"
      />
      <rect
        id="Rectangle"
        x="0"
        y="6.43298969"
        width="32.9896907"
        height="3.13402062"
        rx="1.56701031"
      />
      <rect
        id="Rectangle"
        x="0"
        y="12.8659794"
        width="16.4948454"
        height="3.13402062"
        rx="1.56701031"
      />
    </g>
  </IconWrapper>
);

export default HamburgerIcon;
