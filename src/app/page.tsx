import Image from 'next/image'
import styles from './page.module.scss'

//Components

import Header from './components/header/header'
import Skills from './components/skills-page/skills'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Skills />
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  )
}