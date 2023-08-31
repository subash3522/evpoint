import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin, faMessage, faLink } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer1">
          <div className="location flex">
            <p><FontAwesomeIcon icon={faLocationPin} /></p>
            <p>Get in touch</p>
            <p>Bhaktapur Sipadol</p>
          </div>
          <div className="socialmedia flex">
            <p><FontAwesomeIcon icon={faMessage} /></p>
            <p>Social Media</p>
            <p>See below where you can find us</p>
            <p><FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faFacebook} /></p>
          </div>
          <div className="ourlinks flex">
            <p><FontAwesomeIcon icon={faLink} /></p>
            <p>Useful Link</p> 
          </div>
         
        </div>
        <div className="footer2">
            <div className="text ">
                <p>Copyright, Subash Bhandari all right reserved</p>
                <p>Terms of services | Policy and cookie policy</p>
            </div>
            <div className="logos"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
