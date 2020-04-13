const updateBuffs = (state, action) => {

  if(state === undefined) {
    return {
      loaded: false,
      data: []
    }
  }

  switch (action.type) {
    case 'BUFFS_LOADED':
      return {
        ...state.buffs,
        data: action.payload,
        loaded: true
      }

    case 'BUFF_DELETED':
      return {
        ...state.buffs,
        data: state.buffs.data.filter((buff) => buff.code !== action.payload)
      }

    case 'CURRENT_BUFF_SAVED':
      const updatingIndex = state.buffs.data.findIndex((buff) => buff.code === action.payload.code);

      return {
        ...state.buffs,
        data: [
          ...state.buffs.data.slice(0, updatingIndex),
          action.payload,
          ...state.buffs.data.slice(updatingIndex + 1)
        ]
      }

    case 'CURRENT_BUFF_CREATED':
      return {
        ...state.buffs,
        data: [...state.buffs.data, action.payload],
      }

    default:
      return state.buffs;
  }
}

export default updateBuffs;