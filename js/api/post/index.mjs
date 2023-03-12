"use strict";
import { addPost } from "./addPost.mjs";
import { updatePost } from "./updatePost.mjs";
import { deletePost } from "./deletePost.mjs";
import { getPosts } from "./getPost.mjs";
import { getSinglePost } from "./getSinglePost.mjs";
import { prefixHashtag } from "../../utils/prefixHashtag.mjs";
import { tagSearch } from "../../eventHandlers/tagSearch.mjs";
import { renderPostWall } from "../../profile/profilePostWall.mjs";

// export * from "./updatePost.mjs";

////////// ADD POSTS //////////

// addPost({
//   title: "test post",
//   body: "test",
//   tags: ["figure", "collectible"],
//   media: "https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg",
// });

async function submitPost(e) {
  e.preventDefault();
  const form = document.getElementById("add-post");
  const title = form.postTitle.value;
  const body = form.postMessage.value;
  const tags = prefixHashtag(form.postTags.value);
  const media = form.postMedia.value;

  const postToAdd = {
    title,
    body,
    tags,
    media,
  };
  try {
    await addPost(postToAdd);
  } catch {}
  location.reload("/index.html");
}

function init() {
  const submitButton = document.querySelector("#submit-message");
  submitButton.addEventListener("click", submitPost);
}
init();

const posts = await getPosts();
posts.forEach((post) => renderPostWall(post, false, ".message_container"));

tagSearch();
////////// UPDATE POSTS //////////
// updatePost({
//   id: 4221,
//   title: "NEW! Updated title",
//   body: "Content once again updated with PUT method",
// });

////////// DELETE POSTS //////////
// deletePost({
//   id: 4215,
// });

////////// GET POST //////////
// getPosts();

// getSinglePost(4183);
