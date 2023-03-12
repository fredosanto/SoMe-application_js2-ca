import { getPosts } from "./profile/getProfilePosts.mjs";
import { getProfile } from "./profile/renderBio.mjs";
import { tagSearch } from "../js/eventHandlers/tagSearch.mjs";

getProfile();

getPosts();

tagSearch();
