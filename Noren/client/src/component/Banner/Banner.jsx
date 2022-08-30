import React from "react";
import BannerStyles from "./Banner.module.css";
import globalStyles from "../../global.module.css";
import { banner } from "../../data/banner";

export default function Banner() {
  return (
    <div className={BannerStyles.container}>
      <section className={globalStyles.container}>
        <div className={BannerStyles.bannerImg}>
          {banner.map((data) => (
            <img
              key={data.id}
              src={require(`../../img/${data.image}`)}
              alt={data.company}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
