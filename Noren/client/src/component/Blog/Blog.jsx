import React from "react";
import globalStyles from "../../global.module.css";
import BlogStyles from "./blog.module.css";
import Card from "./BlogCard";
import { blogData } from "../../data/blog";
import AnimationStyles from "../ScrollAnimation/Animations.module.css";
import { ScrollAnimation } from "../ScrollAnimation/ScrollAnimation";

export default function Blog() {
  return (
    <section id='blog' className={BlogStyles.container}>
      <div className={`${globalStyles.container}  `}>
        <div className={BlogStyles.header}>
          <ScrollAnimation
            showClass={AnimationStyles.fadeLeft}
            content={<h2>From Blog</h2>}
          />
        </div>
        <div className={BlogStyles.mobile}>
          {blogData.map((data) => {
            return (
              <ScrollAnimation
                showClass={`${
                  data.id === 1
                    ? AnimationStyles.fadeLeft
                    : data.id === 2
                    ? AnimationStyles.fadeTop
                    : AnimationStyles.fadeRight
                }`}
                content={<Card blogData={data} key={data.id} />}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
