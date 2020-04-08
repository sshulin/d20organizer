import React from 'react';

import propNames from '../../../utils/propNames';
import stringifyModifier from '../../../utils/stringifyModifier';

const BuffListItem = ({buff, onDelete, onEdit}) => {

  const onDeleteWrapper = () => {
    onDelete(buff);
  }
  const onEditWrapper = () => {
    onEdit(buff);
  }

  return (
    <div className="buff-item">
      <div className="buff-item__wrapper">
        <div className="buff-item__header">
          <div className="buff-item__title">
            { buff.name }
          </div>
          <div className="buff-item__actions">
            <div
              className="buff-item__action buff-item__action--delete"
              onClick={onDeleteWrapper}
              >
              <i className="fa fa-trash"></i>
            </div>
            <div
              className="buff-item__action buff-item__action--edit"
              onClick={onEditWrapper}
              >
              <i className="fa fa-pencil"></i>
            </div>
          </div>
        </div>
        <div className="buff-item__content">
          <div className="buff-item__stat-list">
            {
              Object.keys(propNames).map((key) => {

                const propBonus = buff.bonuses ? buff.bonuses[key] : null;
                const propMultiplier = buff.multipliers ? buff.multipliers[key] : null;
                const displayValue = (
                  propBonus ? stringifyModifier(propBonus) : false
                ) || (
                  propMultiplier ? propMultiplier : false
                ) || null;

                let statClassList = 'buff-item__stat ';
                if(propBonus > 0 || propMultiplier > 1) {
                  statClassList += 'buff-item__stat--positive';
                } else if(propBonus < 0 || (propMultiplier > 0 && propMultiplier < 1)) {
                  statClassList += 'buff-item__stat--negative';
                }

                return (
                  propBonus || propMultiplier
                ) ? (
                  <div className={ statClassList } key={ key }>
                    <div className="buff-item__stat-label">
                      { propNames[key].string }:
                    </div>
                    <div className="buff-item__stat-value">
                      { displayValue ? displayValue : null }
                    </div>
                  </div>
                ) : null
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuffListItem;