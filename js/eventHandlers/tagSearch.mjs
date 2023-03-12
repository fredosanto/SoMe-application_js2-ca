"use strict";

export function tagSearch() {
  const searchBtn = document.getElementById("search-button");

  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("search-field-tags");
    const tag = searchInput.value;
    window.location.href = `/search.html?tag=${tag}`;
  });
}
