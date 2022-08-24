import React from 'react'
import BannerStyles from "./banner.module.css"
import globalStyles from "../../global.module.css";
import {banner} from "../../data/banner"


export default function Banner() {
  return (
    <div className={BannerStyles.container}>
    <div className={`${globalStyles.container} ${globalStyles.dFlex} ${globalStyles.justifySpaceBetween}`}>
    <div className={BannerStyles.bannerImg}>
    {
        banner.map((data) => (<img key={data.id} src={require(`../../img/${data.image}`)} alt={data.company} />))
    }
    </div>
    </div>
    </div>
  )
}
