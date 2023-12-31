import Image from "next/image";
import styles from "./page.module.css";
import Darksun from "../components/darksun";
import NavBar from "@/components/navbar";
import AboutMe from "@/components/aboutme";
import StarryNight from "@/components/starrynight";
import OrbitMenu from "@/components/orbit_menu";
import PostGroup from "@/components/post_group";
import ArtsyStuff from "@/components/artsystuff_group";
import WhatIKnow from "@/components/wik";
import ContactMe from "@/components/contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <StarryNight />
      <p className={styles.welcome}>W E L C O M E</p>
      <p className={styles.welcome}>S T R A N G E R</p>
      <Darksun />
      {/* <section className={styles.nav__menu}>
        <div className={styles.portfolio__title}>
          <h1>Andres Velez</h1>
          <p>Front end developer, Audiovisual Communicator &</p>
          <p></p>
          <p>
            Professional{" "}
            <span style={{ color: `var(--NeonLightBlue)` }}>Blue</span> Guy
          </p>
          <div className={styles.menu__subgroup}>
            <h2 className={styles.menu__subtitle}>About me</h2>
            <h2 className={styles.menu__subtitle}>What I know</h2>
            <h2 className={styles.menu__subtitle}>What I do</h2>
            <h2 className={styles.menu__subtitle}>Contact me</h2>
          </div>
        </div>

        <p className={styles.copyright}>© All rights disabled</p>
      </section> */}
      {/* <div className={`${styles.description} ${styles.center}`}>
        <p>C O M I N G&nbsp;&nbsp;&nbsp;&nbsp;S O O N</p>
      </div> */}
      {/* <NavBar />
       */}
      {/* <AboutMe />   */}

      {/* <PostGroup /> */}

      {/* <OrbitMenu /> */}
      {/* <ArtsyStuff /> */}
      {/* <WhatIKnow /> */}
      {/* <ContactMe/> */}
    </main>
  );
}
