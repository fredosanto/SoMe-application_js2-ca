import { profile } from "../profile/getProfileName.mjs";
import { SOCIAL_API_URL } from "../api/apiVariables.mjs";
import { fetchToken } from "../api/fetchToken.mjs";
import { profileTemplate } from "../htmlTemplates/profileTemplate.mjs";

const user = profile("profile");

const actionEndpoint = `/profiles/${user.name}`;

export async function getProfile() {
  const profileURL = SOCIAL_API_URL + actionEndpoint;

  const response = await fetchToken(profileURL);
  const profile = await response.json();

  profileTemplate(profile);

  return profile;
}
