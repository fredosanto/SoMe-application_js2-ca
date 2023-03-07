"use strict";

import { SOCIAL_API_URL } from "../apiVariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts";

export async function addPost(postData) {
  const addPostURL = SOCIAL_API_URL + actionEndpoint;
  //   const token = localStorage.getItem("token");

  const response = await fetchToken(addPostURL, {
    method: "POST",
    body: JSON.stringify(postData),
  });

  const post = await response.json();
  console.log(post);
  return post;
}
