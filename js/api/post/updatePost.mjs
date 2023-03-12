"use strict";

import { SOCIAL_API_URL } from "../apiVariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts";

export async function updatePost(post) {
  const updatePostURL = `${SOCIAL_API_URL}${actionEndpoint}/${post.id}`;

  const response = await fetchToken(updatePostURL, {
    method: "PUT",
    body: JSON.stringify(post),
  });

  const results = await response.json();
  return results;
}
