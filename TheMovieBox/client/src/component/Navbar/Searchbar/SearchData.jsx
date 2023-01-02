import React from "react";
import global from "../../../global.module.scss";
import { MovieData } from "../../../api/FetchRquests/GetMovieData";
import MovieTypesData from "../../MoviesType/MovieTypesData";
import { Dedupe } from "./helper/Dedupe";

export default function SearchData() {
  const data = MovieData("now_playing")
    .concat(MovieData("upcoming"))
    .concat(MovieData("popular"));

  return (
    <div className={global.container}>
      <MovieTypesData dataType={Dedupe(data)} type='search' />
    </div>
  );
}
