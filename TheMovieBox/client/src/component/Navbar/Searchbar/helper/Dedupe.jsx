export const Dedupe = (arr) => {
  return arr.reduce(
    function (acc, current) {
      // create an identifying id from the object values
      var id = [current.id].join(" ");

      // if the id is not found in the temp array
      // add the object to the output array
      // and add the key to the temp array
      if (acc.temp.indexOf(id) === -1) {
        acc.out.push(current);
        acc.temp.push(id);
      }
      return acc;

      // return the deduped array
    },
    {
      temp: [],
      out: [],
    }
  ).out;
};
