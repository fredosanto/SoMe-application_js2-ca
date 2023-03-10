export function profile(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}
