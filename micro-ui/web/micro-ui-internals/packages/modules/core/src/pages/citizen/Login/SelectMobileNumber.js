import React, { useState } from "react";
import FormStep from "../../../../../../react-components/src/molecules/FormStep";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import HorizontalNav from "./HorizontalNav";

const NavItems = [
  { name: "Judge/ Court Staff", code: "Judge/ Court Staff" },
  { name: "Advocate/Litigant", code: "Advocate/Litigant" },
];

const SelectMobileNumber = ({ t, onSelect, showRegisterLink, isRegister, mobileNumber, onMobileChange, config, canSubmit }) => {
  const [activeLink, setActiveLink] = useState(NavItems[0].name);

  const handleActiveLink = (item) => {
    setActiveLink(item);
  };

  return (
    <div className="login-form register">
      <HorizontalNav
        showNav={!isRegister}
        inFormComposer={false}
        configNavItems={NavItems}
        customStyle={{ marginTop: 0, marginBottom: "1rem", borderStyle: "solid", borderWidth: "0 0 1px 0", borderColor: "#e8e8e8" }}
        activeLink={activeLink}
        setActiveLink={handleActiveLink}
      />
      <FormStep
        isDisabled={!(mobileNumber.length === 10 && mobileNumber.match(window?.Digit.Utils.getPattern("MobileNo")) && canSubmit)}
        onSelect={onSelect}
        config={config}
        t={t}
        componentInFront="+91"
        onChange={onMobileChange}
        value={mobileNumber}
      ></FormStep>
      {!isRegister && (
        <h3>
          Don’t have an account?
          <span className="link">
            <Link to={"/works-ui/citizen/register/info"}>Register here</Link>
          </span>
        </h3>
      )}
    </div>
  );
};

export default SelectMobileNumber;
