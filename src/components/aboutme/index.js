import React from "react";
import aboutmeStyles from "./aboutme.module.css";

const aboutme = () => {
  return (
    <div className={aboutmeStyles.aboutme__ctn}>
      <h1>ABOUT ME</h1>
      <p>
        Hey there! I'm a web developer with an undying passion for the visual
        arts and the night sky. I jumped headfirst into the world of web development, with one
        reason and one reason only: to merge style, and functionality and make a
        living out of it.
      </p>
      <p>
        Ever since 2015, I've been immersing myself in technology and user
        experience world, trying to understand and transform ordinary
        interfaces, media, and projects into elegant, user-friendly websites.
      </p>
      <p>
        In order to be able to keep my word and interest I have become a
        perpetual learner, constantly exploring new technologies and programming
        languages to enhance my skills. as I consider that skills and technical
        knowledge are secondary only to my will to adapt and overcome any issue
        or wall I may come across along the way.
      </p>
    </div>
  );
};

export default aboutme;
