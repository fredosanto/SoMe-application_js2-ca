"use strict";
import { addPost } from "../api/post/addPost.mjs";
import { prefixHashtag } from "../utils/prefixHashtag.mjs";

async function submitForm(e) {
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

export function submitPost() {
  const submitButton = document.querySelector("#submit-message");
  submitButton.addEventListener("click", submitForm);
}
