import calcResult from '../utils/calcResult';

import buffCatalog from '../data/buffs';

const createCleanBuff = () => {
  return {
    name: 'New buff', bonuses: {}
  }
}

const initialState = {
  characters: [],
  buffs: {
    loaded: false,
    data: []
  },
  currentCharacter: {
    loaded: false,
    data: null,
    result: null
  }
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'BUFFS_LOADED':
      return {
        ...state,
        buffs: {
          ...state.buffs,
          data: action.payload,
          loaded: true
        }
      };

    case 'CURRENT_CHARACTER_LOADED':
      return {
        ...state,
        currentCharacter: {
          data: action.payload,
          result: calcResult(action.payload, state.buffs.data),
          loaded: true
        }
      };

    case 'CURRENT_CHARACTER_UPDATED':
      return {
        ...state,
        currentCharacter: {
          ...state.currentCharacter,
          data: action.payload,
          result: calcResult(action.payload, state.buffs.data)
        }
      };

    case 'CURRENT_CHARACTER_BUFF_TOGGLE':
      let buffs;
      if(state.currentCharacter.data.buffs.indexOf(action.payload) !== -1) {
        buffs = state.currentCharacter.data.buffs.filter((buff) => buff !== action.payload);
      } else {
        buffs = [...state.currentCharacter.data.buffs, action.payload];
      }
      return {
        ...state,
        currentCharacter: {
          ...state.currentCharacter,
          data: {
            ...state.currentCharacter.data,
            buffs
          },
          result: calcResult({...state.currentCharacter.data, buffs}, state.buffs.data)
        }
      }

    case 'BUFF_DELETED':
      return {
        ...state,
        buffs: {
          ...state.buffs,
          data: state.buffs.data.filter((buff) => buff.code !== action.payload)
        }
      }

    case 'BUFF_SELECTED':
      return {
        ...state,
        currentBuff: state.buffs.data.find((buff) => buff.code === action.payload)
      }

    case 'CURRENT_BUFF_UPDATED':
      return {
        ...state,
        currentBuff: action.payload
      }

    case 'CURRENT_BUFF_SAVED':
      const updatingIndex = state.buffs.data.findIndex((buff) => buff.code === action.payload.code);

      return {
        ...state,
        buffs: {
          ...state.buffs,
          data: [
            ...state.buffs.data.slice(0, updatingIndex),
            action.payload,
            ...state.buffs.data.slice(updatingIndex + 1)
          ]
        },
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
        buffs: {
          ...state.buffs,
          data: [...state.buffs.data, action.payload],
        },
        currentBuff: null
      }

    default:
      return state;
  }
};

export default reducer;