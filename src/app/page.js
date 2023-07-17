import Image from "next/image";
import styles from "./page.module.css";
import Darksun from "../components/darksun";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.description} ${styles.center}`}>
        <p>
        C O M I N G&nbsp;&nbsp;&nbsp;&nbsp;S O O N  
        </p>
      </div>
        <Darksun/>
    </main>
  );
}
