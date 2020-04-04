import React from 'react';

const BuffListItem = ({buff}) => {
	return (
		<div>
			<h3>{ buff.name }</h3>
			<div>
				ATK: <strong>{ buff.bonuses.attack }</strong>
			</div>
			<div>
				DMG: { buff.bonuses.damage }
			</div>
			<div>
				AC: { buff.bonuses.ac }
			</div>
		</div>
	)
}

export default BuffListItem;