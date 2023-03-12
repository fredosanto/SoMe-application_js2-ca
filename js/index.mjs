"use strict";
import { getPosts } from "./api/post/getPost.mjs";
import { renderPostWall } from "./htmlTemplates/renderPosts.mjs";
import { submitPost } from "../js/eventHandlers/submitPost.mjs";
import { tagSearch } from "./eventHandlers/tagSearch.mjs";

const posts = await getPosts();
posts.forEach((post) => renderPostWall(post, false, ".message_container"));

submitPost();

tagSearch();
