"use strict";

export function renderPostWall(post) {
  const postWall = document.querySelector(".message_container");
  let element = document.createElement("div");
  element.classList.add(
    "messages",
    "bg-light",
    "mx-auto",
    "my-5",
    "p-3",
    "shadow-lg"
  );
  element.innerHTML = `
              <div class="d-flex flex-row contact-user mb-2">
                <img
                  class="contact-picture bg-secondary rounded-5"
                  src="${post.author?.avatar}"
                  alt=""
                />
                <div class="text-start m-2">
                  <p class="contact-name m-0">${post.author?.name}</p>
                  <p class="contact-username text-secondary m-0">
                    Post created: ${post.created.substring(0, 10)}
                  </p>
                </div>
              </div>
              <h3 class="text-start">
                ${post.title}
                </h3>
                <p class="text-start">
                  ${post.body}
                </p>
                <p class="text-start text-secondary">
                Tags: ${post.tags}
                </p>
              <div class="post-media">
              <img
              class="media-content img-fluid"
              src="${post.media}"
              alt=""
                />
                </div>
              <div
                class="d-flex message-nav justify-content-center align-items-center"
              >
                <button class="btn w-50 btn-primary rounded-5 m-3">Comment</button>
                <button class="btn w-50 btn-info rounded-5 m-3">Like</button>
                
              </div>
    `;
  postWall.appendChild(element);
}
