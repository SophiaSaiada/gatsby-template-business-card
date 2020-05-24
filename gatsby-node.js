const path = require(`path`);
const packageLockJson = require("./package-lock.json");
const businessCardJson = require("./content/businessCard.json");

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  // We don't display here any page,
  // as we however would've override it in gatsby-browser.wrapPageElement
  const emptyTemplate = path.resolve(`src/templates/empty.js`);

  createPage({
    path: "/",
    component: emptyTemplate,
    context: {
      selectedPageSlug: null,
      viewerVersion:
        packageLockJson.dependencies["react-business-card"]["version"],
    },
  });

  businessCardJson.pages.forEach((page) => {
    createPage({
      path: `/${page.slug}/`,
      component: emptyTemplate,
      context: { selectedPageSlug: page.slug },
    });
  });
};
