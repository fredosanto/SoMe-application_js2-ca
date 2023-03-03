"use strict";

import { login } from "../api/userLogin.mjs";

export function userLogin() {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const loginForm = event.target;

    const email = loginForm.loginEmail.value;
    const password = loginForm.loginPassword.value;

    const user = {
      email,
      password,
    };

    login(user);
  });
}
