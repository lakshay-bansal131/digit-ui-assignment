import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const HorizontalNav = ({
  configNavItems,
  activeLink,
  setActiveLink,
  showNav = false,
  children,
  customStyle = {},
  customClassName = "",
  inFormComposer = true,
  navClassName = "",
  navStyles = {},
}) => {
  const { t } = useTranslation();

  const setActive = (item) => {
    setActiveLink(item.name);
  };

  const MenuItem = ({ item }) => {
    let itemComponent = item.code;

    const Item = () => (
      <span className="menu-item">
        <div className="menu-label" style={activeLink === item.name ? { color: "#0A5757", borderBottom: "3px solid" } : {}}>
          {itemComponent}
        </div>
      </span>
    );

    return <Item />;
  };
  return (
    <div className={navClassName} style={{ ...navStyles }}>
      {showNav && (
        <div
          className={`horizontal-nav ${customClassName}`}
          style={inFormComposer ? { marginLeft: "16px", marginRight: "16px", ...customStyle } : { ...customStyle }}
        >
          {configNavItems?.map((item, index) => {
            return (
              <div
                className={`sidebar-list ${activeLink === item.name ? "active" : ""}`}
                key={index}
                onClick={() => setActive(item)}
                style={{ border: "none", backgroundColor: "white" }}
              >
                <MenuItem item={item} />
              </div>
            );
          })}
        </div>
      )}
      {children}
    </div>
  );
};

export default HorizontalNav;
