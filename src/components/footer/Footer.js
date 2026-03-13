import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
// eslint-disable-next-line
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

// eslint-disable-next-line
export default function Footer() {
    // eslint-disable-next-line
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
      </div>
    </Fade>
  );
}