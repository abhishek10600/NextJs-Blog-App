import React from 'react';
import styles from "./footer.module.css";
import Link from 'next/link';
import Image from 'next/image';
import Facebook from "public/1.png";
import Instagram from "public/2.png";
import Twitter from "public/3.png";
import Youtube from "public/4.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Abhishek Sharma</h1>
      <p className={styles.policy}>All rights reserved 	&#169;Abhishek Sharma | 2023-2024</p>
      <div className={styles.socials}>
        <Link href="#">
          <div className={styles.imgContainer}>
            <Image src={Facebook} alt="Facebook" className={styles.img}/>
          </div>
        </Link>
        <Link href="#">
          <div className={styles.imgContainer}>
            <Image src={Instagram} alt="Instagram" className={styles.img}/>
          </div>
        </Link>
        <Link href="#">
          <div className={styles.imgContainer}>
            <Image src={Twitter} alt="Twitter" className={styles.img}/>
          </div>
        </Link>
        <Link href="#">
          <div className={styles.imgContainer}>
            <Image src={Youtube} alt="Youtube" className={styles.img}/>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Footer