import React, { Component } from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const MobilenNavigationContainer = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(33, 33, 33, 0.9);
  z-index: 1000;
`;

const ListContainer = styled.ul`
  height: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    margin: 2em 0;
    position: relative;
    a {
      font-size: 2em;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      &.active {
        color: rgb(255, 255, 255);
        &:after {
          content: "";
          height: 4px;
          background-color: #00e871;
          position: absolute;
          bottom: -5px;
          right: 0;
          left: 0;
        }
      }
    }
  }
`;

const CloseIcon = styled.svg`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 22px;
  height: 220px;
`;

const MobileNavigation = ({ closeMobileNavigation }) => (
  <MobilenNavigationContainer>
    <CloseIcon onClick={closeMobileNavigation}>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="square"
      >
        <g
          id="Group"
          transform="translate(3.000000, 3.000000)"
          stroke="#FFFFFF"
          strokeWidth="3"
        >
          <path
            d="M0.0695652174,0.0695652174 L15.9523876,15.9523876"
            id="Line"
          />
          <path
            d="M0.0695652174,0.0695652174 L15.9523876,15.9523876"
            id="Line"
            transform="translate(8.000000, 8.000000) rotate(90.000000) translate(-8.000000, -8.000000) "
          />
        </g>
      </g>
    </CloseIcon>
    <ListContainer>
      <li>
        <Link
          onClick={closeMobileNavigation}
          to="/"
          exact
          activeClassName="active"
        >
          NEW
        </Link>
      </li>
      <li>
        <Link
          onClick={closeMobileNavigation}
          to="/hots"
          activeClassName="active"
        >
          HOTS
        </Link>
      </li>
      <li>
        <Link
          onClick={closeMobileNavigation}
          to="/csgo"
          activeClassName="active"
        >
          CS:GO
        </Link>
      </li>
    </ListContainer>
  </MobilenNavigationContainer>
);

export default MobileNavigation;
