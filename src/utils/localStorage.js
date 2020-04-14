const prefix = 'd20o_';

export const setLocalStorage = (key, value) => {
  localStorage.setItem(prefix + key, JSON.stringify(value));
}

export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(prefix + key));
}
