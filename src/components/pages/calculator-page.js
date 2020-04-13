import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {
  currentCharacterUpdated,
  currentCharacterBuffToggle,
  smartFetchBuffs,
  smartFetchCurrentCharacter
  } from '../../actions';

import propNames from '../../utils/propNames';

import Multiselect from '../core/multiselect';
import PennedString from '../core/penned-string';

const CalculatorPage = ({ 
  buffs,
  currentCharacter,
  currentResult,
  currentCharacterUpdated,
  currentCharacterBuffToggle,
  smartFetchBuffs,
  smartFetchCurrentCharacter
}) => {

  useEffect(() => {
    smartFetchBuffs();
    smartFetchCurrentCharacter();
  }, [smartFetchBuffs, smartFetchCurrentCharacter])

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
        ...currentCharacter.data,
        stats: {
          ...currentCharacter.data.stats,
          [stat]: +value
        }
      }

      currentCharacterUpdated(newCharacter)
    }
  }

  const onNameChange = (event) => {
    let value = event.target.value;
    
    currentCharacterUpdated({
      ...currentCharacter.data,
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
          {
            currentCharacter.loaded ? (
              <div className="charedit">
                <div className="charedit__title">
                  <PennedString 
                    value={ currentCharacter.data.name }
                    onChange={onNameChange}
                  />
                </div>
                <div className="charedit__stats">
                  {
                    Object.keys(currentCharacter.data.stats).map((stat) => {
                      let bonusClassList = 'charedit__stats-bonus ';
                      if(currentCharacter.result && currentCharacter.result.delta) {
                        if(currentCharacter.result.delta[stat] > 0) {
                          bonusClassList += 'charedit__stats-bonus--positive';
                        } else if(currentCharacter.result.delta[stat] < 0) {
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
                                value={currentCharacter.data.stats[stat]}
                                onChange={handleStatChange(stat)}
                                type="text" />
                            </div>
                            {
                              (currentCharacter.result && currentCharacter.result.delta) ? (
                                <div className={bonusClassList}>
                                  { currentCharacter.result.delta ? propNames[stat].getter(currentCharacter.result.delta[stat]) : '' }
                                </div>
                              ) : null
                            }
                            {
                              (currentCharacter.result && currentCharacter.result.stats) ? (
                                <div className="charedit__stats-result">
                                  { currentCharacter.result.stats ? propNames[stat].getter(currentCharacter.result.stats[stat]) : '' }
                                </div>
                              ) : null
                            }
                          </div>
                          </div>
                      )
                    })
                  }
                </div>
              </div>
            ) : null
          }
        </div>
        <div className="page__section page__section--grower page__section--nopadding">
          {
            (currentCharacter.loaded && buffs.loaded) ? (
              <Multiselect 
                items={buffs.data}
                selected={currentCharacter.data.buffs}
                keyProp="code"
                nameGetter={buffNameGetter}
                descriptionGetter={buffDescriptionGetter}
                onItemClick={buffToggle}
                />
            ) : null
          }
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ buffs, currentCharacter }) => {
  return {
    buffs,
    currentCharacter
  }
}

const mapDispatchToProps = {
  currentCharacterUpdated,
  currentCharacterBuffToggle,
  smartFetchBuffs,
  smartFetchCurrentCharacter
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorPage);