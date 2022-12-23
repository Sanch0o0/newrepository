const BASE_URL = 'http://localhost:4001';

const apiRequest = async (url, method, data) => {
  let response;

  if (method === 'GET') {
    response = await fetch(`${BASE_URL}${url}`);
  } else {
    response = await fetch(`${BASE_URL}${url}`, {
      method,
      body: data ? JSON.stringify(data) : undefined,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const responseData = await response.json();

  return responseData;
};
