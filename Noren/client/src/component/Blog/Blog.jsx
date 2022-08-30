import React from "react";
import globalStyles from "../../global.module.css";
import BlogStyles from "./blog.module.css";
import Card from "./BlogCard";
import { blogData } from "../../data/blog";

export default function Blog() {
  return (
    <section id='blog' className={BlogStyles.container}>
      <div className={`${globalStyles.container}  `}>
        <div className={BlogStyles.header}>
          <h2>From Blog</h2>
        </div>
        <div className={BlogStyles.mobile}>
          {blogData.map((data) => {
            return <Card blogData={data} key={data.id} />;
          })}
        </div>
      </div>
    </section>
  );
}
