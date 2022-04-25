export const fetchData = async (url, method, body) => {
  const data = await fetch(url, {
    method: method.toUpperCase(),
    body: JSON.stringify(body),
  });
  const response = await data.json();
  return response;
};
