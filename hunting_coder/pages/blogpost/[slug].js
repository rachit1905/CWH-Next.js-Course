import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          temporibus laborum consequuntur. Deserunt quisquam fugiat quo facere
          cumque velit blanditiis temporibus, officia qui quasi quod vel sint
          corrupti aut asperiores!
        </div>
      </main>
    </div>
  );
};

export default slug;
