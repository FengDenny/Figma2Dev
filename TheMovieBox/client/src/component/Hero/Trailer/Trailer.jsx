import { useState, useEffect } from "react";
import {
  getMovieYTTrailers,
  embedYouTubeURL,
} from "../../../api/endpoint/movies";
import { key } from "../../../api/TMBDKey.js";
import { fetchRequest } from "../../../api/FetchRquests/FetchRequest";

export default function Trailer({ data }) {
  const [trailerData, setTrailerData] = useState([]);

  useEffect(() => {
    const getTrailers = getMovieYTTrailers(data.id, key);
    try {
      fetchRequest(getTrailers, "GET", key).then((response) =>
        setTrailerData(response.data.results)
      );
    } catch (err) {
      console.error(err);
    }
  }, []);

  const filterTrailers = trailerData.filter(
    (data) => data.type.includes("Trailer") || data.type.includes("Teaser")
  );

  return (
    filterTrailers[0] && (
      <iframe
        src={embedYouTubeURL(filterTrailers[0].key)}
        allow='autoplay'
        allowFullScreen
        title={filterTrailers[0].name}
      />
    )
  );
}
