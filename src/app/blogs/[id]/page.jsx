import React from 'react'
import styles from "./page.module.css";

const getData = async(id)=>{
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
      cache:"no-store",
    });
    if(!res.ok){
      throw new Error("Failed to fetch");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const BlogPost = async({params}) => {
  const id = params.id;
  const data = await getData(id);
  return (
    <div className={styles.container}>
      <div className={styles.blogTitle}>
        <h1 className={styles.title}>{data.title}</h1>
      </div>
      <div className={styles.blogDesc}>
        <h3 className={styles.desc}>{data.desc}</h3>
      </div>
      <div className={styles.blogContent}>
        <p className={styles.content}>{data.content}</p>
      </div>
      <div className={styles.blogAuthor}>
        <p className={styles.author}>{data.username}</p>
      </div>
    </div>
  )
}

export default BlogPost;