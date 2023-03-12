import { getPosts } from "../js/api/post/getPost.mjs";
import { renderPostWall } from "../js/profile/profilePostWall.mjs";

export async function init() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const tag = params.get("tag");
  const posts = await getPosts(tag);
  posts.forEach((post) => renderPostWall(post, false, ".profile_posts"));
}
init();
