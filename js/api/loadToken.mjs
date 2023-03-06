export function load(key) {
  const value = localStorage.getItem(key);
  return JSON.parse(value);
}
