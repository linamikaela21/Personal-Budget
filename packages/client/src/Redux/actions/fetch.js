export const fetchData = async ({ url, method, body, params = '' }) => {
  const token = localStorage.getItem("token");
  const data = await fetch(url, {
    headers: new Headers({
      'Authorization': token ? `Bearer ${token}` : "",
      'Content-Type': 'application/json',
    }),
    method: method.toUpperCase(),
    body: JSON.stringify(body),
    params: JSON.stringify(params),
  });
  const response = await data.json();
  return response;
};
