import { useGetMovies } from "../../hooks/useGetMovies";

export const MovieData = (data) => {
  const GetMovieData = (data) => useGetMovies(`${data}`, "GET");
  switch (data) {
    case "now_playing":
      return GetMovieData("now_playing");
    case "popular":
      return GetMovieData("popular");
    case "upcoming":
      return GetMovieData("upcoming");
    default:
      return GetMovieData("now_playing");
  }
};
