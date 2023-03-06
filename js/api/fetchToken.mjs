import { load } from "./loadToken.mjs";

export function addHeaders() {
  // const token = localStorage.getItem("token");
  const token = load("token");

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

export async function fetchToken(url, options) {
  return fetch(url, {
    ...options,
    headers: addHeaders(),
  });
}
