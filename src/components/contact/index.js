import React from "react";
import contactStyles from "./contact.module.css";

function ContactMe() {
  return (
    <section className={contactStyles.contact__ctn}>
      <article className={contactStyles.constellation__ctn}>
        <svg viewBox="0 0 500 500" width="500" height="500">
          <path
            fill="none"
            stroke="white"
            stroke-width="5"
            d="M 420 57 L 324 95 L 248 168 L 204 275 L 235 402 L 147 431 L 123 308 L 204 275"
          ></path>
          <foreignObject x="395" y="32" width="50" height="50">
            <div className={contactStyles.starlink__ctn}>
              <div className={contactStyles.starlink} />
            </div>
          </foreignObject>
          <foreignObject x="299" y="70" width="50" height="50">
            <div className={contactStyles.starlink__ctn}>
              <div className={contactStyles.starlink} />
            </div>
          </foreignObject>
          <foreignObject x="223" y="143" width="50" height="50">
            <div className={contactStyles.starlink__ctn}>
              <div className={contactStyles.starlink} />
            </div>
          </foreignObject>
          <foreignObject x="179" y="250" width="50" height="50">
            <div className={contactStyles.starlink__ctn}>
              <div className={contactStyles.starlink} />
            </div>
          </foreignObject>
          <foreignObject x="210" y="377" width="50" height="50">
            <div className={contactStyles.starlink__ctn}>
              <div className={contactStyles.starlink} />
            </div>
          </foreignObject>
          <foreignObject x="140" y="422" width="50" height="50">
            <div className={contactStyles.starlink} />
          </foreignObject>
          <foreignObject x="98" y="283" width="50" height="50">
            <div className={contactStyles.starlink__ctn}>
              <div className={contactStyles.starlink} />
            </div>
          </foreignObject>
        </svg>
        -- Contact Section --
      </article>
    </section>
  );
}

export default ContactMe;
