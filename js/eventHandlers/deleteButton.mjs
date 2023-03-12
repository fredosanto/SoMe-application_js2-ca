import { deletePost } from "../api/post/deletePost.mjs";

export const deleteButton = () => {
  const deleteButtons = document.querySelectorAll("#delete-post");
  deleteButtons.forEach((button) => {
    const name = button.name;
    button.addEventListener("click", async () => {
      deletePost({ id: name });
    });
  });
};
