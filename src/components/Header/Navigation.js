import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import device from "../../constants/mediaSizes";

const NavigationContainer = styled.nav`
  display: flex;
  height: 100%;
  align-items: center;
`;

const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  height: 100%;
  font-size: 0.8rem;

  li {
    width: 120px;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;

    a {
      display: flex;
      height: 100%;
      align-items: center;
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      &.active {
        color: rgb(255, 255, 255);
        &:after {
          content: "";
          height: 4px;
          background-color: #00e871;
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
        }
      }
    }
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const Navigation = () => (
  <NavigationContainer>
    <ListContainer>
      <li>
        <Link to="/" exact activeClassName="active">
          NEW
        </Link>
      </li>
      <li>
        <Link to="/hots" activeClassName="active">
          HOTS
        </Link>
      </li>
      <li>
        <Link to="/csgo" activeClassName="active">
          CS:GO
        </Link>
      </li>
    </ListContainer>
  </NavigationContainer>
);

export default Navigation;
