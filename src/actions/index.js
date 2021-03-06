import buffCatalog from '../data/buffs';
import currentCharacter from '../data/currentCharacter';
import { getBuffsApi, getCurrentCharacterApi } from '../utils/api';

const currentCharacterLoaded = (character) => {
	return {
		type: 'CURRENT_CHARACTER_LOADED',
		payload: character
	}
}

const currentCharacterUpdated = (character) => {
	return {
		type: 'CURRENT_CHARACTER_UPDATED',
		payload: character
	}
}

const fetchCurrentCharacter= () => (dispatch) => {
	dispatch(buffsRequested());

	getCurrentCharacterApi().then(
		(buffs) => dispatch(currentCharacterLoaded(buffs)),
		(error) => dispatch(currentCharacterLoaded(currentCharacter))
	);
}

const smartFetchCurrentCharacter= () => (dispatch, getState) => {
	const { currentCharacter: { loaded } } = getState();

	if(!loaded) dispatch(fetchCurrentCharacter());
}

const currentCharacterBuffToggle = (buffCode) => {
	return {
		type: 'CURRENT_CHARACTER_BUFF_TOGGLE',
		payload: buffCode
	}
}


const buffsLoaded = (newBuffs) => {
	return {
		type: 'BUFFS_LOADED',
		payload: newBuffs
	}
}

const buffsRequested = (payload) => {
	return {
		type: 'BUFFS_REQUESTED',
		payload: payload
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

const cleanBuffInited = (buff) => {
	return {
		type: 'CLEAN_BUFF_INITED',
		payload: buff
	}
}

const currentBuffCreated = (buff) => {
	return {
		type: 'CURRENT_BUFF_CREATED',
		payload: buff
	}
}

const fetchBuffs = () => (dispatch) => {
	dispatch(buffsRequested());

	getBuffsApi().then(
		(buffs) => dispatch(buffsLoaded(buffs)),
		(error) => dispatch(buffsLoaded(buffCatalog))
	);
}

const smartFetchBuffs = () => (dispatch, getState) => {
	const { buffs: { loaded } } = getState();

	if(!loaded) dispatch(fetchBuffs());
}

export {
	buffsLoaded,
	currentCharacterUpdated,
	currentCharacterBuffToggle,

	buffDeleted,
	buffSelected,
	currentBuffUpdated,
	currentBuffSaved,
	cleanBuffInited,
	currentBuffCreated,

	fetchBuffs,
	smartFetchBuffs,
	fetchCurrentCharacter,
	smartFetchCurrentCharacter
};