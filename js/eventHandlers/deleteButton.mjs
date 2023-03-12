import { deletePost } from "../api/post/deletePost.mjs";

export const hydrateButton = () => {
  const deleteButtons = document.querySelectorAll("#delete-post");
  deleteButtons.forEach((button) => {
    const name = button.name;
    button.addEventListener("click", async () => {
      // console.log("i was clicked");
      deletePost({ id: name });
    });
  });
};
