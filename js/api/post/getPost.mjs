"use strict";

import { SOCIAL_API_URL } from "../apiVariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

// const actionEndpoint = "/posts?sortOrder=desc&limit=20&_author=true";
const actionEndpoint = "/posts?sortOrder=desc&limit=20&_author=true";

export async function getPosts(tag) {
  let endpoint = actionEndpoint;
  if (tag) {
    const cleanTag = encodeURIComponent(tag);
    endpoint = actionEndpoint + `&_tag=${cleanTag}`;
  }
  const postsURL = SOCIAL_API_URL + endpoint;

  const response = await fetchToken(postsURL);
  const posts = await response.json();

  return posts;
}
