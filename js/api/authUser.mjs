"use strict";
import { SOCIAL_API_URL } from "./apiVariables.mjs";

const formAction = "/auth/register";

export async function register(user) {
  const registerURL = SOCIAL_API_URL + formAction;

  const response = await fetch(registerURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  const result = await response.json();
  alert("You successfuly registered a acount");
  return result;
}
