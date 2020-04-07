import stringifyModifier from './stringifyModifier';

const propNames = {
  attack: {
    string: 'ATK',
    getter: stringifyModifier
  },
  ac: {
    string: 'AC',
    getter: (value) => {
      return value
    }
  },
  damage: {
    string: 'DMG',
    getter: stringifyModifier
  }
};

export default propNames;