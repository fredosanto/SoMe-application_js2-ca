"use strict";

import { SOCIAL_API_URL } from "../apiVariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts?_author=true";

export async function addPost(postData) {
  const addPostURL = SOCIAL_API_URL + actionEndpoint;
  try {
    const response = await fetchToken(addPostURL, {
      method: "POST",
      body: JSON.stringify(postData),
    });

    const post = await response.json();
    return post;
  } catch (error) {
    console.error(error);
  }
}
