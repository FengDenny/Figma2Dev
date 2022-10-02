// T.C O(n)
export default function FetchSingleRequestByID(response, dataID) {
  return response.reduce(
    (
      acc,
      {
        id,
        title,
        release_date,
        vote_average,
        backdrop_path,
        original_language,
        vote_count,
        overview,
      }
    ) => {
      id.toString().includes(dataID) &&
        acc.push({
          id,
          title,
          backdrop_path,
          release_date,
          vote_average,
          original_language,
          vote_count,
          overview,
        });
      return acc;
    },
    []
  );
}
