"use strict";
import { getSinglePost } from "../api/post/getSinglePost.mjs";
import { updatePost } from "../api/post/updatePost.mjs";
import { getPosts } from "../profile/getProfilePosts.mjs";

export async function updateHandler() {
  const updateForm = document.getElementById("update-post");

  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");
  const post = await getSinglePost(id);

  updateForm.title.value = post.title;
  updateForm.body.value = post.body;
  updateForm.tags.value = post.tags;
  updateForm.media.value = post.media;

  updateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const post = Object.fromEntries(formData.entries());

    post.tags = [post.tags];
    post.id = id;

    updatePost(post);
  });
}
updateHandler();
