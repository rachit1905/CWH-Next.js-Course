import React from "react";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.grid}>
          <a href="/blogpost/learn-react" className={styles.card}>
            <h3 className={styles.blogItemh3}>
              How to learn Javascript in 2022?
            </h3>
            <p>JavaScript is a language used to design logic for the web</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3 className={styles.blogItemh3}>
              How to learn Javascript in 2022?
            </h3>
            <p>JavaScript is a language used to design logic for the web</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3 className={styles.blogItemh3}>
              How to learn Javascript in 2022?
            </h3>
            <p>JavaScript is a language used to design logic for the web</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3 className={styles.blogItemh3}>
              How to learn Javascript in 2022?
            </h3>
            <p>JavaScript is a language used to design logic for the web</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
