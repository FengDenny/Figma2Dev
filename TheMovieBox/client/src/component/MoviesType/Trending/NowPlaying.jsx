import React, { useState, useEffect } from "react";
import { fetchRequest } from "../../../api/FetchRquests/FetchRequest";
import { getMoviesEndpoint } from "../../../api/endpoint/movies";
import { getImage } from "../../../api/endpoint/image";
import { key } from "../../../api/TMBDKey.js";

export default function NowPlaying() {
  const nowPlaying = getMoviesEndpoint("now_playing", key, 1);
  const [result, getResult] = useState([]);
  useEffect(() => {
    try {
      fetchRequest(nowPlaying, "GET", key).then((response) => {
        getResult(response.data.results);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);
  return <div>NowPlaying</div>;
}
