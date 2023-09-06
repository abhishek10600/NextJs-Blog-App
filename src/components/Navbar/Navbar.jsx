"use client";

import React from 'react'
import styles from "./navbar.module.css";
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const session = useSession();
  const navLinks = [
    {
      id:1,
      title:"Home",
      url:"/",
    },
    {
      id:2,
      title:"Blogs",
      url:"/blogs"
    },
    {
      id:3,
      title:"About",
      url:"/about"
    },
    {
      id:4,
      title:"Contact",
      url:"/contact"
    },
    {
      id:5,
      title:"Dashboard",
      url:"/dashboard"
    }
  ]
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Express-O</Link>
      <div className={styles.links}>
      {navLinks.map(item=>(
        <Link key={item.id} href={item.url}>{item.title}</Link>
      ))}
      {
        session.status === "authenticated" &&  <button className={styles.button} onClick={signOut}>Logout</button>
      }
      </div>
    </div>
  )
}

export default Navbar