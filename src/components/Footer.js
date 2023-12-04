import React from "react";
import './Footer.css'

import Divider from "./Divider";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="horizontalFooter">
        <p>Build in with React.js</p>
        <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="React.js logo" />
      </div>
      <Divider></Divider>
      <h2>Contact me</h2>
      <div className="horizontalFooter">
        <p>Demian Calleros</p>
        <a href="tel:+526567779087">Call me: +52 656 777 9087</a>
        <a href="mailto:me@DemianC.com">Email me: me@DemianC.com</a>
      </div>
    </footer>
  )
}

export default Footer