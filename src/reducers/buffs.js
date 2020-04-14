import { saveBuffsApi } from '../utils/api';

const updateBuffs = (state, action) => {

  if(state === undefined) {
    return {
      loaded: false,
      data: []
    }
  }

  switch (action.type) {
    case 'BUFFS_LOADED': {
      return {
        ...state.buffs,
        data: action.payload,
        loaded: true
      }
    }

    case 'BUFF_DELETED': {
      const data = state.buffs.data.filter((buff) => buff.code !== action.payload);
      saveBuffsApi(data).then();

      return {
        ...state.buffs,
        data
      }
    }

    case 'CURRENT_BUFF_SAVED': {
      const updatingIndex = state.buffs.data.findIndex((buff) => buff.code === action.payload.code);
      const data = [
        ...state.buffs.data.slice(0, updatingIndex),
        action.payload,
        ...state.buffs.data.slice(updatingIndex + 1)
      ];

      saveBuffsApi(data).then();

      return {
        ...state.buffs,
        data
      }
    }

    case 'CURRENT_BUFF_CREATED': {
      const data = [...state.buffs.data, action.payload];

      saveBuffsApi(data).then();

      return {
        ...state.buffs,
        data
      }
    }

    default: {
      return state.buffs;
    }
  }
}

export default updateBuffs;