/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

 exports.onCreateWebpackConfig = ({actions}) => {
    actions.setWebpackConfig({
      resolve: {
        fallback: {
          fs: false,
          path: false,
        },
      },
    });
  };
