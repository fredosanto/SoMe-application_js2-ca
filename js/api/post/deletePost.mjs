"use strict";

import { SOCIAL_API_URL } from "../apiVariables.mjs";
import { fetchToken } from "../fetchToken.mjs";

const actionEndpoint = "/posts";

export async function deletePost(post) {
  const deletePostURL = `${SOCIAL_API_URL}${actionEndpoint}/${post.id}`;

  const response = await fetchToken(deletePostURL, {
    method: "DELETE",
  });

  const results = await response.json();
  console.log(results);
  return results;
}
