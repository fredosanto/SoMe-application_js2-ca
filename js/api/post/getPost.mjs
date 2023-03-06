"use strict";

import { SOCIAL_API_URL } from "../apiVariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts";

export async function getPosts() {
  const postsURL = SOCIAL_API_URL + actionEndpoint;

  const response = await fetchToken(postsURL);

  const posts = await response.json();
  console.log(posts);
}

// getPosts();

export async function getSinglePost(postId) {
  const postURL = `${SOCIAL_API_URL}${actionEndpoint}/${postId}`;

  const response = await fetchToken(postURL);

  const singlePost = await response.json();
  console.log(singlePost);
}

getSinglePost(4183);
