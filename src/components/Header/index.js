import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';

import logo from '../../images/logo.svg';

const HeaderWrapper = styled.div`
  height: 70px;
  background: rgba(33, 33, 33, 0.7);
  margin-bottom: 70px;
  width: 100%;
  border-bottom: 1px solid #38393c;
  position: relative;
`;
const HeaderContainer = styled.div`
  max-width: 1060px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 1rem;
  }
`;

const Navigation = styled.nav`
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
          content: '';
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
`;

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          eSportal Tutorials
        </Link>
      </h1>
      <Navigation>
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
      </Navigation>
    </HeaderContainer>
  </HeaderWrapper>
);

export default Header;
