
const buffsLoaded = (newBuffs) => {
	return {
		type: 'BUFFS_LOADED',
		payload: newBuffs
	}
}

const currentCharacterUpdated = (character) => {
	return {
		type: 'CURRENT_CHARACTER_UPDATED',
		payload: character
	}
}

const currentCharacterBuffToggle = (buffCode) => {
	return {
		type: 'CURRENT_CHARACTER_BUFF_TOGGLE',
		payload: buffCode
	}
}

const buffDeleted = (buffCode) => {
	return {
		type: 'BUFF_DELETED',
		payload: buffCode
	}
}

const buffSelected = (buffCode) => {
	return {
		type: 'BUFF_SELECTED',
		payload: buffCode
	}
}

const currentBuffUpdated = (buff) => {
	return {
		type: 'CURRENT_BUFF_UPDATED',
		payload: buff
	}
}

const currentBuffSaved = (buff) => {
	return {
		type: 'CURRENT_BUFF_SAVED',
		payload: buff
	}
}

export {
	buffsLoaded,
	currentCharacterUpdated,
	currentCharacterBuffToggle,

	buffDeleted,
	buffSelected,
	currentBuffUpdated,
	currentBuffSaved
};