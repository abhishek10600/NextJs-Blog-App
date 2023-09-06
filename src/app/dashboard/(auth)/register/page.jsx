"use client";
import React, { useState } from 'react';
import styles from "./page.module.css";
import Link from 'next/link';
import { useRouter } from "next/navigation";

const Register = () => {
  const {error,setError} = useState(false);
  const router = useRouter();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("http://localhost:3000/api/auth/register",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,email,password}),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setError(true);
    }
  }
  return (
    <div className={styles.container}>
        <div className={styles.formContainer}>
            <div className={styles.title}>
                <h1>Create a new account</h1>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input type="text" placeholder="Create a username" className={styles.input}/>
                <input type="email" placeholder="Enter your email" className={styles.input}/>
                <input type="password" placeholder="Create a password" className={styles.input}/>
                <button className={styles.button}>Register</button>
            </form>
        </div>
        <Link href="/dashboard/login">Already have an account?</Link>
        {error && "Something went wrong"}
    </div>
  )
}

export default Register;