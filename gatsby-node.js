const path = require(`path`);
const packageLockJson = require("./package-lock.json");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;
  const jsonTemplate = path.resolve(`src/templates/json.js`);

  createPage({
    path: `version`,
    component: jsonTemplate,
    context: {
      value: {
        version: packageLockJson.dependencies["react-business-card"]["version"],
      },
    },
  });
};
