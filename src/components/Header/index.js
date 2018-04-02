import React, { Component } from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import MobileNavIcon from "./HamburgerIcon";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import device from "../../constants/mediaSizes";

const HeaderWrapper = styled.div`
  height: 70px;
  background: rgba(33, 33, 33, 0.7);
  margin-bottom: 70px;
  width: 100%;
  border-bottom: 1px solid #38393c;
  position: relative;

  @media ${device.tablet} {
    height: 45px;
    margin-bottom: 45px;
  }
`;
const HeaderContainer = styled.div`
  max-width: 1060px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  h1 {
    font-size: 1rem;
    margin-left: 20px;

    a {
      color: white;
      text-decoration: none;
    }
  }

  @media ${device.tablet} {
    justify-content: center;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavOpen: false
    };

    this.handleMobileNavOpen = this.handleMobileNavOpen.bind(this);
    this.handleMobileNavClose = this.handleMobileNavClose.bind(this);
  }

  handleMobileNavOpen() {
    this.setState({ mobileNavOpen: true });
  }

  handleMobileNavClose() {
    this.setState({ mobileNavOpen: false });
  }

  render() {
    const { mobileNavOpen } = this.state;
    return (
      <HeaderWrapper>
        <HeaderContainer>
          <MobileNavIcon openMobileNavigation={this.handleMobileNavOpen} />
          <h1>
            <Link to="/">eSportal Tutorials</Link>
          </h1>

          <Navigation />
          {mobileNavOpen && (
            <MobileNavigation
              closeMobileNavigation={this.handleMobileNavClose}
            />
          )}
        </HeaderContainer>
      </HeaderWrapper>
    );
  }
}

export default Header;
