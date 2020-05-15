import React, { useState } from "react"
import businessCardData from "../../content/businessCard.json"

export default () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(-1)

  return (
    <div>
      <h1>{businessCardData.siteName}</h1>
      <p>{businessCardData.mainContent}</p>
      <hr />
      <div>
        {businessCardData.sliderPhotos.map((photoUrl, photoIndex) => (
          <img key={photoIndex} src={photoUrl} height="40" width="40" />
        ))}
      </div>
      <hr />
      <div>
        {businessCardData.menuItems.map((menuItem, menuItemIndex) => (
          <button
            key={menuItemIndex}
            onClick={() => setSelectedMenuItem(menuItemIndex)}
          >
            {menuItem.title}
          </button>
        ))}
      </div>
      <div>
        {businessCardData.menuItems.map(
          (menuItem, menuItemIndex) =>
            menuItemIndex === selectedMenuItem &&
            JSON.stringify(menuItem.content)
        )}
      </div>
    </div>
  )
}
