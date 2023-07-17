import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.description} ${styles.center}`}>
        <p>
          Hello and welcome stranger!
        </p>
        <div>
        </div>
      </div>
    </main>
  )
}
