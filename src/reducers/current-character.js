import calcResult from '../utils/calcResult';

const updateCurrentCharacter = (state, action) => {

  if (state === undefined) {
    return {
      loaded: false,
      data: null,
      result: null
    };
  }

  switch (action.type) {
    case 'CURRENT_CHARACTER_LOADED':
      return {
        data: action.payload,
        result: calcResult(action.payload, state.buffs.data),
        loaded: true
      };

    case 'CURRENT_CHARACTER_UPDATED':
      return {
        ...state.currentCharacter,
        data: action.payload,
        result: calcResult(action.payload, state.buffs.data)
      };

    case 'CURRENT_CHARACTER_BUFF_TOGGLE':
      let buffs;
      if(state.currentCharacter.data.buffs.indexOf(action.payload) !== -1) {
        buffs = state.currentCharacter.data.buffs.filter((buff) => buff !== action.payload);
      } else {
        buffs = [...state.currentCharacter.data.buffs, action.payload];
      }
      return {
        ...state.currentCharacter,
        data: {
          ...state.currentCharacter.data,
          buffs
        },
        result: calcResult({...state.currentCharacter.data, buffs}, state.buffs.data)
      }

    default:
      return state.currentCharacter
  }
}

export default updateCurrentCharacter;
