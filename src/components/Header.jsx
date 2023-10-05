import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import Banner from "./Banner";

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    const selectedValue = event.target.value;
    // Here, you can implement logic to change the language in your application
    // For example, you might use a library like i18next or simply update a state variable with the selected language code.
    // For simplicity, we'll just update the state in this example.
    setSelectedLanguage(selectedValue);
  };
  return (
    <div className="Hero_section_bg">
      <div className="container">
        <nav>
          <div className="header_navbar">
            <div className="logo">
              <img src={require("../assets/images/logo.png")} alt="logo" />
            </div>

            <div className="nav_link">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Features</a>
                </li>
                <li>
                  <a href="/">Services</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="login_section">
              <ul>
                <li>
                  <AiOutlineUser style={{ color: "white", fontSize: "16px" }} />
                </li>
                <p>Login</p>
                <div className="lan_button">
                  <select
                    id="languageSelect"
                    onChange={handleLanguageChange}
                    value={selectedLanguage}
                  >
                    <option value="en">
                      <img src={require("../assets/images/En.png")} alt="" />
                    </option>
                    <option value="es">
                      <img src={require("../assets/images/Ro.png")} alt="" />
                    </option>
                  </select>
                </div>
                {/* <!-- mobile view --> */}
                <div className="mobile_menu">
                  <FiMenu />
                </div>
              </ul>
            </div>
          </div>
        </nav>
        <Banner />
      </div>
    </div>
  );
};

export default Header;
