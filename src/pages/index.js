import React from "react";
import businessCardData from "../../content/businessCard.json";
import BusinessCardView from "react-business-card";

export default () => {
  return <BusinessCardView businessCardData={businessCardData} />;
};
