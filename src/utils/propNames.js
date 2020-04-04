const propNames = {
  attack: {
    string: 'ATK',
    getter: (value) => {
      return (
        (value > 0 ? '+' : '') + value
      )
    }
  },
  ac: {
    string: 'AC',
    getter: (value) => {
      return value
    }
  },
  damage: {
    string: 'DMG',
    getter: (value) => {
      return (
        (value > 0 ? '+' : '') + value
      )
    }
  }
};

export default propNames;