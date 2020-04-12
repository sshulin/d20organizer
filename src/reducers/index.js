import calcResult from '../utils/calcResult';

import buffCatalog from '../data/buffs';

const createCleanBuff = () => {
  return {
    name: 'New buff', bonuses: {}
  }
}

const initialState = {
  characters: [],
  buffs: buffCatalog,
  currentCharacter: {
    name: 'Skyor',
    stats: {
      ac: 31,
      attack: 12,
      damage: 3
    },
    buffs: []
  },
  currentResult: {

  }
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'BUFFS_LOADED':
      return {
        ...state,
        books: action.payload
      };

    case 'CURRENT_CHARACTER_UPDATED':
      return {
        ...state,
        currentCharacter: action.payload,
        currentResult: calcResult(action.payload, state.buffs)
      };

    case 'CURRENT_CHARACTER_BUFF_TOGGLE':
      let buffs;
      if(state.currentCharacter.buffs.indexOf(action.payload) !== -1) {
        buffs = state.currentCharacter.buffs.filter((buff) => buff !== action.payload);
      } else {
        buffs = [...state.currentCharacter.buffs, action.payload];
      }
      return {
        ...state,
        currentCharacter: {
          ...state.currentCharacter,
          buffs
        },
        currentResult: calcResult({...state.currentCharacter, buffs}, state.buffs)
      }

    case 'BUFF_DELETED':
      return {
        ...state,
        buffs: state.buffs.filter((buff) => buff.code !== action.payload)
      }

    case 'BUFF_SELECTED':
      return {
        ...state,
        currentBuff: state.buffs.find((buff) => buff.code === action.payload)
      }

    case 'CURRENT_BUFF_UPDATED':
      return {
        ...state,
        currentBuff: action.payload
      }

    case 'CURRENT_BUFF_SAVED':
      const updatingIndex = state.buffs.findIndex((buff) => buff.code === action.payload.code);

      return {
        ...state,
        buffs: [
          ...state.buffs.slice(0, updatingIndex),
          action.payload,
          ...state.buffs.slice(updatingIndex + 1)
        ],
        currentBuff: null
      }

    case 'CLEAN_BUFF_INITED':

      return {
        ...state,
        currentBuff: createCleanBuff()
      }

    case 'CURRENT_BUFF_CREATED':
      return {
        ...state,
        buffs: [...state.buffs, action.payload],
        currentBuff: null
      }

    default:
      return state;
  }

  return state;
};

export default reducer;