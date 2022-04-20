const requestAPI = async (endpoint, options) => {
  const res = await fetch(`http://localhost:8000${endpoint}`, options);
  const data = await res.json();
  return data;
};

const api = {
  // Url shortener
  getUrls() {
    return requestAPI(`/url`, {
      method: "GET",
    });
  },
  setUrls(params) {
    return requestAPI(`/url`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
  },
  // One time secret
  getSecrets() {
    return requestAPI(`/secret`, {
      method: "GET",
    });
  },
  setSecrets(params) {
    return requestAPI(`/secret`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
  },
};

export default api;
