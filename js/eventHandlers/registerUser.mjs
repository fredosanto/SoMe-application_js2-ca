"use strict";
import { register } from "../api/authUser.mjs";

export function userRegistration() {
  const registrationForm = document.getElementById("registerUser");

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const registrationForm = event.target;

    const name = registrationForm.registerUsername.value;
    const email = registrationForm.registerEmail.value;
    const password = registrationForm.loginPassword.value;
    const avatar = registrationForm.registerAvatar.value;
    const banner = registrationForm.registerProfilePicture.value;

    const user = {
      name,
      email,
      password,
      avatar,
      banner,
    };

    register(user);
  });
}
