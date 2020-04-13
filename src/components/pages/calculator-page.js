import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  currentCharacterUpdated,
  currentCharacterBuffToggle,
  smartFetchBuffs
  } from '../../actions';

import propNames from '../../utils/propNames';

import Multiselect from '../core/multiselect';
import PennedString from '../core/penned-string';

const CalculatorPage = ({ buffs, currentCharacter, currentResult, currentCharacterUpdated, currentCharacterBuffToggle, smartFetchBuffs }) => {

  useEffect(() => {
    smartFetchBuffs()
  }, [smartFetchBuffs])

  const buffNameGetter = (buff) => {
    return buff.name;
  }

  const buffDescriptionGetter = (buff) => {
   return Object.keys(buff.bonuses)
    .filter((key) => buff.bonuses[key])
    .map((key) => {
      return propNames[key].string + ': ' + propNames[key].getter(buff.bonuses[key])
    }).join(', ');
  }

  const handleStatChange = (stat) => {
    return (event) => {
      let value = event.target.value.replace(/[^\d.-]/g, '');

      if(value === '-' || value === '0-') return;

      let newCharacter = {
        ...currentCharacter,
        stats: {
          ...currentCharacter.stats,
          [stat]: +value
        }
      }

      currentCharacterUpdated(newCharacter)
    }
  }

  const onNameChange = (event) => {
    let value = event.target.value;
    
    currentCharacterUpdated({
      ...currentCharacter,
      name: value
    })
  }

  const buffToggle = (buff) => {
    currentCharacterBuffToggle(buff.code)
  }

  return (
    <div className="page">
      <div className="page__wrapper">
        <div className="page__title">
          Calculator
        </div>
        <div className="page__section">
          <div className="charedit">
            <div className="charedit__title">
              <PennedString 
                value={ currentCharacter.name }
                onChange={onNameChange}
              />
            </div>
            <div className="charedit__stats">
              {
                Object.keys(currentCharacter.stats).map((stat) => {
                  let bonusClassList = 'charedit__stats-bonus ';
                  if(currentResult && currentResult.delta) {
                    if(currentResult.delta[stat] > 0) {
                      bonusClassList += 'charedit__stats-bonus--positive';
                    } else if(currentResult.delta[stat] < 0) {
                      bonusClassList += 'charedit__stats-bonus--negative';
                    }
                  }

                  return (
                    <div className="charedit__stats-item" key={stat}>
                      <div className="charedit__stats-label">
                        { propNames[stat].string }:
                      </div>
                      <div className="charedit__stats-content">
                        <div className="charedit__stats-rawval">
                          <input
                            value={currentCharacter.stats[stat]}
                            onChange={handleStatChange(stat)}
                            type="text" />
                        </div>
                        {
                          currentResult.delta &&
                          <div className={bonusClassList}>
                            { currentResult.delta ? propNames[stat].getter(currentResult.delta[stat]) : '' }
                          </div>
                        }
                        <div className="charedit__stats-result">
                          { currentResult.stats ? propNames[stat].getter(currentResult.stats[stat]) : '' }
                        </div>
                      </div>
                      </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <div className="page__section page__section--grower page__section--nopadding">
          <Multiselect 
            items={buffs.data}
            selected={currentCharacter.buffs}
            keyProp="code"
            nameGetter={buffNameGetter}
            descriptionGetter={buffDescriptionGetter}
            onItemClick={buffToggle}
            />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ buffs, currentCharacter, currentResult }) => {
  return {
    buffs,
    currentCharacter,
    currentResult
  }
}

const mapDispatchToProps = {
  currentCharacterUpdated,
  currentCharacterBuffToggle,
  smartFetchBuffs
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);