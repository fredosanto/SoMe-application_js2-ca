"use strict";

export function prefixHashtag(string) {
  const words = string
    .split("#")
    .filter(Boolean)
    .map((w) => "#" + w.trim());

  return words;
}
