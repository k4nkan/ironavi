const isLocalhost =
  location.hostname === "localhost" || location.hostname.startsWith("127.");

export const API_URL = isLocalhost
  ? "http://localhost:3000"
  : "https://ironavi-production.up.railway.app";
