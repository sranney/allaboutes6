module.exports = {
    siteMetadata: {
        title: `Deep Dive Into ES6`,
        description: `A deep dive into ES6 features. Providing surprising and interesting code examples that will help you discover the beauty of JavaScript all over again.`,
        author: `@js_bacon_and_me`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/, // See below to configure properly
                },
            },
        },
        {
            resolve: 'gatsby-plugin-web-font-loader',
            options: {
                google: {
                    families: ['Droid Sans', 'Droid Serif'],
                },
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
