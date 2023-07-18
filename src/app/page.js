import Image from "next/image";
import styles from "./page.module.css";
import Darksun from "../components/darksun";
import NavBar from '@/components/navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.nav__menu}>
        <h1>Hello <span>World</span>!</h1>
        <div className={styles.sub__ctn}>
        
        </div>
        <h2 className={styles.menu__subtitle}>About me</h2>
        <h2 className={styles.menu__subtitle}>What I know</h2>
        <h2 className={styles.menu__subtitle}>What i do</h2>
        <h2 className={styles.menu__subtitle}>Contact me</h2>
      </section>

      <div className={`${styles.description} ${styles.center}`}>
        <p>
        C O M I N G&nbsp;&nbsp;&nbsp;&nbsp;S O O N  
        </p>
      </div>
      {/* <button>E N T E R</button> */}
        <NavBar/>
        <Darksun/>
    </main>
  );
}
