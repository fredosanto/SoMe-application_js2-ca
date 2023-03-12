export function profileTemplate(profile) {
  const profileHeader = document.querySelector(".profile-bio");
  let bio = document.createElement("div");
  bio.classList.add(
    "container",
    "profile-header",
    "bg-light",
    "text-center",
    "p-2",
    "my-4"
  );
  bio.innerHTML = `
  <div class="container profile-header bg-light text-center p-2 my-4">
  <img
    class="profile-picture rounded-circle mx-auto my-4"
    src="${profile.avatar}"
    alt=""
  />
  <div class="name-container mx-auto my-4">
    <p class="profile-name">${profile.name}</p>
    <p class="profile-username fw-bold text-secondary">
      ${profile.email}
    </p>
  </div>
</div>
  `;
  profileHeader.appendChild(bio);
}
