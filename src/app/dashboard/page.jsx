"use client";

import React from 'react'
import styles from "./page.module.css";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();
  const fetcher = (...args)=> fetch(...args).then(res=>res.json());
  const {data,mutate,error,isLoading} = useSWR(`http://localhost:3000/api/posts?username=${session?.data?.user?.name}`,fetcher);
  console.log(data);
  if(session.status === "loading"){
    return <p>Loading...</p>
  }if(session.status === "unauthenticated"){
    router?.push("/dashboard/login");
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const content = e.target[2].value;
    const username = session.data.user.name;
    try {
      await fetch("http://localhost:3000/api/posts",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({title,desc,content,username})
      })
      mutate();
    } catch (error) {
      console.log(error);
    }
  }
  const handleDelete = async(id)=>{
    try {
        await fetch(`http://localhost:3000/api/posts/${id}`,{
          method:"DELETE"
        });
        mutate();
        e.target.reset();
    } catch (error) {
      console.log(error);
    }
    
  }
  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.leftContent}>Your Blogs</h1>
          {
            data?.map(post=>(
              <div className={styles.blogContainer}>
                <h1 className={styles.blogTitle}>{post.title}</h1>
                <p className={styles.blogDescription}>{post.desc}</p>
                <button className={styles.deleteBlogButton} onClick={()=>handleDelete(post._id)}>Delete</button>
              </div>
            ))
          }
        </div>
        <div className={styles.right}>
            <h1 className={styles.rightContent}>Create Your Blog</h1>
            <hr></hr>
              <div className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <input type="text" placeholder="Title" className={styles.input} required/>
                  <input type="text" placeholder="Description" className={styles.input} required/>
                  <textarea className={styles.textarea} placeholder="Content" cols="30" rows="18"></textarea>
                  <button className={styles.button}>Submit</button>
                </form>
              </div>
        </div>
    </div>
  )
}

export default Dashboard