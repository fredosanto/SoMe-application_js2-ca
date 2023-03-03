"use strict";
import { SOCIAL_API_URL } from "./apiVariables.mjs";

const formAction = "/auth/login";

export async function login(user) {
  const loginURL = SOCIAL_API_URL + formAction;

  const response = await fetch(loginURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const { accessToken, ...profile } = await response.json();

  localStorage.setItem("token", JSON.stringify(accessToken));
  localStorage.setItem("profile", JSON.stringify(profile));
  alert("Logged in");
}
