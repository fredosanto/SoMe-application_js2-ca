"use strict";

import { renderPostWall } from "../../htmlTemplates/posts.mjs";
import { SOCIAL_API_URL } from "../apiVariables.mjs";
import { fetchToken } from "../fetchToken.mjs";
import { hydrateButton } from "../../eventHandlers/deleteButton.mjs";

const actionEndpoint = "/posts?sortOrder=desc&limit=20&_author=true";

export async function getPosts() {
  const postsURL = SOCIAL_API_URL + actionEndpoint;

  const response = await fetchToken(postsURL);
  const posts = await response.json();

  // renderPostWall(posts);
  posts.forEach((post) => renderPostWall(post));

  // hydrate buttons
  hydrateButton();

  console.log(posts);

  return posts;
}
