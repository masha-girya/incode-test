export function setLocalItem(key: string, value: string) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalItem(key: string) {
  return localStorage.getItem(key);
}

export function removeLocalItems(keys: string[]) {
  keys.forEach((key) => localStorage.removeItem(key));
}
