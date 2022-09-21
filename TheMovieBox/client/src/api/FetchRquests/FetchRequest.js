export const fetchRequest = async (url, method, key) => {
  return await fetch(`${url}`, {
    method: `${method}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${key}`,
    },
  }).then(handleRequest);
};

const handleRequest = async (res) => {
  if (res.status === 200) {
    return Promise.resolve(res.json()).then((data) => {
      return { data, status: res.status };
    });
  }
  return Promise.reject(res.status);
};
