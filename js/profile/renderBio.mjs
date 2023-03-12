import { profile } from "./getProfileName.mjs";
import { SOCIAL_API_URL } from "../api/apiVariables.mjs";
import { fetchToken } from "../api/fetchToken.mjs";
import { bioTemplate } from "../htmlTemplates/bioTemplate.mjs";

const user = profile("profile");

const actionEndpoint = `/profiles/${user.name}`;

export async function getProfile() {
  const profileURL = SOCIAL_API_URL + actionEndpoint;

  const response = await fetchToken(profileURL);
  const profile = await response.json();

  bioTemplate(profile);

  return profile;
}
