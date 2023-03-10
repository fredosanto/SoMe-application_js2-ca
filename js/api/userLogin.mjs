"use strict";
import { SOCIAL_API_URL } from "./apiVariables.mjs";

const formAction = "/auth/login";

export async function login(user) {
  try {
    const loginURL = SOCIAL_API_URL + formAction;

    const response = await fetch(loginURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const { accessToken, ...profile } = await response.json();

      // window.location.replace("/index.html");
      localStorage.setItem("token", JSON.stringify(accessToken));
      localStorage.setItem("profile", JSON.stringify(profile));

      alert("Logged in");
      location.assign("/index.html");
    } else {
      alert("Something went wrong, try again.");
    }
  } catch (error) {
    console.log(error);
  }
}
