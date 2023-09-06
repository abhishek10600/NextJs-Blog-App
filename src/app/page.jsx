import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import HeroImg from "public/HomePageHero.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h1 className={styles.title}>A place to express your ideas!</h1>
        <p className={styles.desc}>Building a community where we can talk about technology, future and ideas</p>
        <Button url="/blogs" text="Read Blogs"/>
      </div>
      <div className={styles.imageContainer}>
        <Image src={HeroImg} alt="Coder Image" className={styles.img}/>
      </div>
    </div>
  )
}
