import React from 'react';
import { connect } from 'react-redux';

import { currentBuffUpdated, currentBuffSaved, currentBuffCreated } from '../../../actions';

import propNames from '../../../utils/propNames';
import omitKey from '../../../utils/omitKey';

import PennedString from '../penned-string/';

const BuffForm = ({buff, currentBuffUpdated, currentBuffSaved, currentBuffCreated}) => {

  const toggleBonusProp = (prop) => {
    if(buff.bonuses.hasOwnProperty(prop)) {
      currentBuffUpdated({
        ...buff,
        bonuses: omitKey(buff.bonuses, prop)
      })
    } else {
      currentBuffUpdated({
        ...buff,
        bonuses: {
          ...buff.bonuses,
          [prop]: 0
        }
      })
    }
  }

  const closeForm = () => {
    currentBuffUpdated(null);
  }

  const save = () => {
    if(buff.code) {
      currentBuffSaved(buff);
    } else {
      currentBuffCreated({
        ...buff,
        code: buff.name.replace(' ', '_').toLowerCase()
      })
    }
  }

  const detectBuffBonusPresent = (prop) => {
    return buff.bonuses && buff.bonuses.hasOwnProperty(prop);
  }
  const detectBuffMultiplierPresent = (prop) => {
    return buff.multiplier && buff.multiplier.hasOwnProperty(prop);
  }
  const detectBuffPresent = (prop, type) => {
    if(type === 'bonus') {
      return detectBuffBonusPresent(prop);
    } else if(type === 'multiplier') {
      return detectBuffMultiplierPresent(prop);
    } else {
      return false;
    }
  }

  const onNameChange = (event) => {
    let value = event.target.value;
    
    currentBuffUpdated({
      ...buff,
      name: value
    })
  }

  return (
    <div className="buff-form">
      <div className="buff-form__wrapper">
        <div className="buff-form__header">
          <div className="buff-form__title">
            <PennedString
              value={buff.name}
              onChange={onNameChange}
            />
          </div>
          <div className="buff-form__actions">
            <div
              className="buff-form__action buff-form__action--cancel"
              onClick={closeForm}
              >
              <i className="fa fa-close"></i>
            </div>
            <div
              className="buff-form__action buff-form__action--save"
              onClick={save}
              >
              <i className="fa fa-save"></i>
            </div>
          </div>
        </div>
        <div className="buff-form__content">
          <div className="buff-form__subtitle">
            Plain bonuses
          </div>
          <div className="buff-form__props">
            <div className="chips">
              <div className="chips__list">
                {
                  Object.keys(propNames).map((prop) => {
                    const itemClassList = 'chips__item ' + (
                      detectBuffPresent(prop, 'bonus') ? 'chips__item--active' : ''
                    )
                    return (
                      <div
                        className={ itemClassList }
                        key={prop}
                        onClick={ () => toggleBonusProp(prop) }>
                        { propNames[prop].string }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="buff-form__field-list">
            {
              Object.keys(propNames).map((prop) => {

                if(!buff.bonuses.hasOwnProperty(prop)) return;

                const onPropChange = (event) => {
                  let value = event.target.value.replace(/[^\d.-]/g, '');

                  if(value === '-' || value === '0-') return;
                  
                  currentBuffUpdated({
                    ...buff,
                    bonuses: {
                      ...buff.bonuses,
                      [prop]: +value
                    }
                  })
                }

                return (
                  <div className="buff-form__field-item" key={prop}>
                    <div className="buff-form__field-label">
                      { propNames[prop].string }:
                    </div>
                    <div className="buff-form__field-content">
                      <input
                        type="text"
                        className="buff-form__field-input"
                        value={buff.bonuses[prop]}
                        onChange={onPropChange}
                        />
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ currentBuff }) => {
  return {
    buff: currentBuff
  }
}

const mapDispatchToProps = {
  currentBuffUpdated,
  currentBuffSaved,
  currentBuffCreated
};

export default connect(mapStateToProps, mapDispatchToProps)(BuffForm);