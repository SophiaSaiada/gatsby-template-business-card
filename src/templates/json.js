import React from "react";

export default ({ pageContext }) => {
  return JSON.stringify(pageContext.value);
};
