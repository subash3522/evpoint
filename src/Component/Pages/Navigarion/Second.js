import React from "react";
import "./Second.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AOS from 'aos';
import { useEffect } from "react";
import {
  faClock,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

function Second() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="mid-second">
        <div className="interior">
          <div>
            <p>
              <span>
                <FontAwesomeIcon icon={faClock} />
              </span>
              Opening Hour
            </p>
            <p>Mon–Fri: 09:00 – 15:00</p>
          </div>
          <div>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              Phone Number
            </p>
            <p>+9779843812610</p>
          </div>
          <div>
            <p>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              Email Address
            </p>
            <p>bhandarisubash22@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="midthird">
        <p className="third1">
          What service we provide ?<br />
          Parking, Charging, servicing
        </p>
        <p className="third2"> Get Appointment Now</p>
      </div>
      <div className="fourth">
        <div className="fourth-header">Services</div>
        <div className="fourth-content">
          <div className="content1" data-aos="zoom-in-down"></div>
          <div className="content2" data-aos="fade-up">
            Our Electric Vehicle (EV) service aims to revolutionize sustainable
            transportation. We provide comprehensive charging solutions that
            prioritize efficiency, convenience, and environmental stewardship.
            With a network of strategically located charging stations, we offer
            seamless access to reliable charging infrastructure, empowering EV
            owners to embark on journeys with confidence. Our userfriendly
            mobile app simplifies locating, reserving, and paying for charging
            sessions. Through cutting-edge technology and a commitment to a
            greener future, we're driving the transition to electric mobility.
            Join us in reducing carbon footprints and shaping a cleaner, more
            connected world, one electrifying ride at a time.
          </div>
        </div>
      </div>
    </>
  );
}

export default Second;
