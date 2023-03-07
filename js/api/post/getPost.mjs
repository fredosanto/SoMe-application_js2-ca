"use strict";

import { SOCIAL_API_URL } from "../apiVariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts";

export async function getPosts() {
  const postsURL = SOCIAL_API_URL + actionEndpoint;

  const response = await fetchToken(postsURL);

  const posts = await response.json();
  console.log(posts);
  return posts;
}

// getPosts();
