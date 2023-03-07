"use strict";

import { SOCIAL_API_URL } from "../apiVariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts";

export async function getSinglePost(postId) {
  const postURL = `${SOCIAL_API_URL}${actionEndpoint}/${postId}`;

  const response = await fetchToken(postURL);

  const singlePost = await response.json();
  console.log(singlePost);
  return singlePost;
}

// getSinglePost(4183);
