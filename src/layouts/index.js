import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import styled from "styled-components";
import Img from "gatsby-image";
import device from "../constants/mediaSizes";

import Header from "../components/Header";
import "./index.css";

const BgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;
`;

const BodyWrapper = styled.div`
  font-family: "Roboto";
  min-height: 100vh;
`;

const ContentWrapper = styled.main`
  margin: 0 auto;
  max-width: 1060px;
  position: relative;
  padding: 0 20px;
`;

const Footer = styled.div`
  font-family: "Roboto";
  height: 200px;
  border-top: 1px solid #3c3c3c;
`;

const FooterContent = styled.div`
  height: 100%;
  margin: 0 auto;
  max-width: 1060px;
  display: flex;
  align-items: center;
  font-size: 10px;
  color: #5a5a5a;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 0 20px;
  }
`;

const FooterBackToTop = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const BackToTopArrow = styled.svg`
  width: 15px;
  height: 15px;
  fill: #00e871;
  margin-left: 15px;
`;

const TemplateWrapper = ({ children, data }) => {
  return (
    <div>
      <Img
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
        sizes={data.background.sizes}
      />
      <BodyWrapper>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header data={data} />
        <ContentWrapper>{children()}</ContentWrapper>
      </BodyWrapper>
      <Footer>
        <FooterContent>
          <p>
            @Copyright eSportal {new Date().getFullYear()}. All rights reserved.
          </p>
          <FooterBackToTop onClick={() => window.scrollTo(0, 0)}>
            <p>BACK TO TOP</p>
            <BackToTopArrow viewBox="0 0 22 22">
              <path d="M7 14l5-5 5 5z" />
            </BackToTopArrow>
          </FooterBackToTop>
        </FooterContent>
      </Footer>
    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/bg.jpg/" }) {
      sizes(maxWidth: 1920) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
