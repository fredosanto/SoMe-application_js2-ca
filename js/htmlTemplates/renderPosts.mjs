"use strict";

export function renderPostWall(post, isPrivate, parentId) {
  const postWall = document.querySelector(parentId);
  let element = document.createElement("div");
  element.classList.add(
    "messages",
    "bg-light",
    "mx-auto",
    "my-5",
    "p-3",
    "shadow-lg"
  );

  const editbutton = `<a href="edit.html?id=${post.id}" class="btn w-50 btn-primary rounded-5 m-3">Edit</a>`;
  const deleteButton = `<button id="delete-post" name="${post.id}" class="btn w-50 btn-danger rounded-5 m-3">Delete</button>`;
  const commentButton =
    '<button class="btn w-50 btn-primary rounded-5 m-3">Comment</button>';
  const likeButton =
    '<button class="btn w-50 btn-info rounded-5 m-3">Like</button>';

  const buttons = isPrivate
    ? editbutton + deleteButton
    : commentButton + likeButton;
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
              <div class="text-start">
              <a href="post.html?id=${post.id}" class="d-inline-block"><h3>
              ${post.title}
              </h3></a>
              </div>
                <p class="text-start">
                  ${post.body}
                </p>
                <p class="text-start text-secondary">
                Tags: ${post.tags.join(" ")}
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
                ${buttons}
              </div>
    `;

  postWall.appendChild(element);
}
