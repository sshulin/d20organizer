import { getLocalStorage, setLocalStorage } from './localStorage';

export const getBuffsApi = () => {
  return new Promise((resolve, reject) => {
    const data = getLocalStorage('buffs')
    if(data) {
      resolve(data);
    } else {
      reject(false)
    }
  });
}

export const saveBuffsApi = (params) => {
  return new Promise((resolve, reject) => {
    setLocalStorage('buffs', params);

    resolve(true);
  });
}

export const getCurrentCharacterApi = () => {
  return new Promise((resolve, reject) => {
    const data = getLocalStorage('current_character')
    if(data) {
      resolve(data);
    } else {
      reject(false)
    }
  });
}

export const saveCurrentCharacterApi = (params) => {
  return new Promise((resolve, reject) => {
    setLocalStorage('current_character', params);

    resolve(true);
  });
}
