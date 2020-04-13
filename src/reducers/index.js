import updateBuffs from './buffs';
import updateCurrentBuff from './current-buff';
import updateCurrentCharacter from './current-character';

const reducer = (state, action) => {
  return {
    buffs: updateBuffs(state, action),
    currentBuff: updateCurrentBuff(state, action),
    currentCharacter: updateCurrentCharacter(state, action)
  }
};

export default reducer;