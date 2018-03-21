module.exports = {
  siteMetadata: {
    title: "eSportal tutorials",
    desc: "A new blog"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "img",
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["roboto"]
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
              backgroundColor: "#212121"
            }
          }
        ]
      }
    },
    "gatsby-transformer-sharp"
  ]
};
