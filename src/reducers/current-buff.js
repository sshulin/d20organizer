const createCleanBuff = () => {
  return {
    name: 'New buff', bonuses: {}
  }
}

const updateCurrentBuff = (state, action) => {

  if(state === undefined) {
    return null
  }

  switch (action.type) {

    case 'BUFF_SELECTED': {
      return state.buffs.data.find((buff) => buff.code === action.payload)
    }
    case 'CURRENT_BUFF_UPDATED': {
      return action.payload
    }

    case 'CURRENT_BUFF_SAVED': {
      return null
    }

    case 'CLEAN_BUFF_INITED': {
      return createCleanBuff()
    }

    case 'CURRENT_BUFF_CREATED': {
      return null
    }

    default: {
      return state.currentBuff
    }
  }
}

export default updateCurrentBuff;
