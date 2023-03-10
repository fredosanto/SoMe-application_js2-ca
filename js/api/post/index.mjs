"use strict";
import { addPost } from "./addPost.mjs";
import { updatePost } from "./updatePost.mjs";
import { deletePost } from "./deletePost.mjs";
import { getPosts } from "./getPost.mjs";
import { getSinglePost } from "./getSinglePost.mjs";

// export * from "./updatePost.mjs";

////////// ADD POSTS //////////
// addPost({
//   title: "No title",
//   body: "No content yet",
// });
//ids: 4215, 4179, 4220

// addPost({
//   title: "test post",
//   body: "test",
//   tags: ["figure", "collectible"],
//   media: "https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg",
// });

//first post info (accepted)
//body: "test"
//created: "2023-03-06T10:02:37.198Z"
//id: 4179
//media: "https://images.pexels.com/photos/7422160/pexels-photo-7422160.jpeg"
//tags: ["figure", "collectible"]
//title: test post
//updated: "2023-03-06T10:02:37.198Z"

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

async function submitPost(e) {
  e.preventDefault();
  const form = document.getElementById("add-post");
  const title = form.postTitle.value;
  const body = form.postMessage.value;
  const makeTags = form.postTags.value;
  const media = form.postMedia.value;
  const tags = makeTags.split("#");

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

getPosts();

// getSinglePost(4183);
