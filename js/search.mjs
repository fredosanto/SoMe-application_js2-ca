import { getPosts } from "../js/api/post/getPost.mjs";
// import { renderPostWall } from "../js/profile/profilePostWall.mjs";
import { renderPostWall } from "../js/htmlTemplates/renderPosts.mjs";
import { tagSearch } from "../js/eventHandlers/tagSearch.mjs";

export async function init() {
  const queryString = document.location.search;
  const params = new URLSearchParams(queryString);
  const tag = params.get("tag");
  const posts = await getPosts(tag);
  posts.forEach((post) => renderPostWall(post, false, ".profile_posts"));
}
init();

tagSearch();
