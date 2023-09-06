"use client";

import React from 'react'
import styles from "./page.module.css";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const session = useSession();
  const router = useRouter();
  if(session.status === "loading"){
    return <p>Loading...</p>
  }
  if(session.status === "authenticated"){
    router?.push("/dashboard");
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {email,password});

  }
  return (
    <div className={styles.container}>
        <div className={styles.formContainer}>
            <div className={styles.title}>
                <h1>Welcome To Express-O</h1>
                
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter your email" className={styles.input} required/>
                <input type="password" placeholder="Enter your password" className={styles.input} required/>
                <button className={styles.button}>Login</button>
            </form>
            <button className={styles.buttonGoogle} onClick={()=> signIn("google")}>Login with Google</button>
        </div>
    </div>
  )
}

export default Login