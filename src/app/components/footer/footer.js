import React from "react";
import styles from "./Footer.module.css"
const Footer = () => {
  return (
    <div className={`bg-primary text-center text-white py-3 position-fixed b-0 ${styles.footerdiv}`}>
      &copy; This page is copyrighted to me.
    </div>
  );
};

export default Footer;
