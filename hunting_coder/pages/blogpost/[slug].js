import React from "react";
// import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = (props) => {
  // const router = useRouter();
  // const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{ props.blog.title}</h1>
        <hr />
        <div>
          {props.blog.content}
        </div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  let blog = await fetch(
    "http://localhost:3000/api/getBlog?blog=" + context.query.slug
  );
  blog = await blog.json();
  // console.log(blog);
  return {
    props: {blog},
  };
}

export default slug;
