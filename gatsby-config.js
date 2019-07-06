const queries = require('./src/utils/algolia')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Franklin Farahani`,
    author: `Franklin Farahani`,
    description: `A blog about JS related topics that I'm currently interested in ⚛️`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `frankfarahani`,
      github: `franklinfarahani`,
      linkedin: `franklin-farahani`,
      email: `me@franklinfarahani.ca`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow"
            }
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              colorTheme: 'Monokai Vibrant', // Read on for list of included themes. Also accepts object and function forms.
              wrapperClassName: '',  // Additional class put on 'pre' tag
              injectStyles: true,    // Injects (minimal) additional CSS for layout and scrolling
              extensions: [{
                identifier: 's3gf4ult.monokai-vibrant',
                version: '0.5.0'
              }],        // Extensions to download from the marketplace to provide more languages and themes
              languageAliases: {},   // Map of custom/unknown language codes to standard/known language codes
              replaceColor: x => x,  // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
              getLineClassName: ({   // Function allowing dynamic setting of additional class names on individual lines
                content,             //   - the string content of the line
                index,               //   - the zero-based index of the line within the code fence
                language,            //   - the language specified for the code fence
                codeFenceOptions     //   - any options set on the code fence alongside the language (more on this later)
              }) => ''
            },
          },
          {
            resolve: `@raae/gatsby-remark-oembed`,
            options: {
              providers: {
                settings: {
                  Twitter: {
                    hide_thread: 'true', // previous Tweet in a conversation thread will not be displayed
                    align: 'center'
                  },
                  Instagram: {
                    hidecaption: true
                  }
                }
              }
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          `gatsby-remark-reading-time`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Franklin Farahani`,
        short_name: `Franklin.codes`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#171717`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-typescript`,
    'gatsby-plugin-tslint',
  ],
}
