"use strict";

import { SOCIAL_API_URL } from "../apiVariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

//Add an index for scrolling so the &limit= adjusts to get 10 new posts at the time
const actionEndpoint = "/posts?sortOrder=desc&limit=50&_author=true";

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
