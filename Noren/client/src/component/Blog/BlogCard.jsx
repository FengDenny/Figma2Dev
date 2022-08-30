import React from "react";
import BlogStyles from "./blog.module.css";
import { FaCalendarAlt, FaHourglassEnd } from "react-icons/fa";
export default function BlogCard({
  blogData: { title, description, date, duration, image },
}) {
  return (
    <article className={BlogStyles.card}>
      <img src={require(`../../img/${image}`)} alt={title} />
      <div className={BlogStyles.blogInfo}>
        <div className={`${BlogStyles.icon} ${BlogStyles.date}`}>
          <FaCalendarAlt />
        </div>
        <h4>{date}</h4>
        <div className={`${BlogStyles.icon} ${BlogStyles.duration}`}>
          <FaHourglassEnd />
        </div>
        <h4>{duration}</h4>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
