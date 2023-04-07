import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import * as fs from "fs";

const Blog = (props) => {
  const [count, setCount] = useState(4);
  const [blogs, setBlogs] = useState(props.blogs);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.grid}>
          <InfiniteScroll
            dataLength={blogs.length}
            next={async () => {
              let allBlogs = await fetch(
                `http://localhost:3000/api/getBlogs?count=${count + 2}`
              );
              setCount(count + 2);
              allBlogs = await allBlogs.json();
              setBlogs(allBlogs);
            }}
            hasMore={blogs.length < props.totalBlogs}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {blogs.map((blog, key) => {
              return (
                <div key={key} className={styles.card}>
                  <Link href={`/blogpost/${blog.href}`}>
                    <h3 className={styles.blogItemh3}>{blog.title}</h3>
                  </Link>
                  <Link href={`/blogpost/${blog.href}`}>
                    <p>{blog.content.substr(0, 240)}...</p>
                  </Link>
                </div>
              );
            })}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  let allBlogs = await fetch("http://localhost:3000/api/getBlogs?count=4");
  let blogs = await allBlogs.json();
  let totalBlogs = fs.readdirSync("blogdata");
  totalBlogs = totalBlogs.length;
  // console.log(totalBlogs);
  return {
    props: { blogs, totalBlogs },
  };
}

export default Blog;
