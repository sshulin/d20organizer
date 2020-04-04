import calcBuffedStats from '../utils/calcBuffedStats';
import calcStatsDelta from '../utils/calcStatsDelta';

const calcResult = (character, buffs) => {
  const buffData = buffs.filter((buff) => character.buffs.indexOf(buff.code) !== -1);

  return {
    stats: calcBuffedStats(character.stats, buffData),
    delta: calcStatsDelta(character.stats, calcBuffedStats(character.stats, buffData))
  }
}

const initialState = {
  buffs: [
    {code: 'bigger', name: 'Bigger size', bonuses: {ac: -2, attack: 0, damage: 1}},
    {code: 'rage', name: 'Rage', bonuses: {ac: -2, attack: 2, damage: 2}},
    {code: 'fatigued', name: 'Fatigued', bonuses: {ac: -1, attack: 1, damage: 1}},
    {code: 'stonestrike', name: 'Stone strike', bonuses: {attack: 1, damage: 1}},
    {code: 'fightdefencively', name: 'Fighting defencively', bonuses: {ac: 2, attack: -4}},
    {code: 'defencivestance', name: 'Defencive Stance', bonuses: {ac: 2, attack: 2, damage: 2}},
  ],
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

    default:
      return state;
  }

  return state;
};

export default reducer;