
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

export {
	buffsLoaded,
	currentCharacterUpdated,
	currentCharacterBuffToggle
};