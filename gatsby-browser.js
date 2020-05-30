const React = require(`react`);
const BusinessCardView = require("react-business-card").default;
const businessCardJson = require("./content/businessCard.json");
const naviagte = require("gatsby").navigate;

exports.wrapPageElement = ({ element, props }) => {
  // In order to make page transitions work,
  // we always display a single BusinessCardView component,
  // and only change its props - without rerender the whole component (and page).
  return React.createElement(
    BusinessCardView,
    {
      businessCardData: businessCardJson,
      selectedPageSlug: props.pageContext.selectedPageSlug,
      onSelectPage: (page) => {
        if (page) {
          naviagte(`/${page.slug}/`);
        } else {
          naviagte(`/`);
        }
      },
    },
    element
  );
};
