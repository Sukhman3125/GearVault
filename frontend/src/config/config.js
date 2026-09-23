const config = {
  apiUrl: import.meta.env.VITE_API_URL
    ? String(import.meta.env.VITE_API_URL).trim()
    : "http://localhost:5000/api",
};

export default config;
