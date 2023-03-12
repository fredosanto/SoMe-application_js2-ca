"use strict";

import { SOCIAL_API_URL } from "../api/apiVariables.mjs";
import { fetchToken } from "../api/fetchToken.mjs";
import { renderPostWall } from "../htmlTemplates/renderPosts.mjs";
import { deleteButton } from "../eventHandlers/deleteButton.mjs";
import { profile } from "./getProfileName.mjs";

const myProfile = profile("profile");

const actionEndpoint =
  //   "/posts/profiles/RonBurgundy11/posts?sortOrder=desc&limit=20&_author=true";
  `/profiles/${myProfile.name}/posts?_author=true`;

export async function getPosts() {
  const postsURL = SOCIAL_API_URL + actionEndpoint;

  const response = await fetchToken(postsURL);
  const posts = await response.json();
  // renderPostWall(posts);
  posts.forEach((post) => renderPostWall(post, true, ".profile_posts"));
  console.log(posts);

  // hydrate buttons
  deleteButton();

  return posts;
}
