import React, { useEffect } from 'react';
import BuffList from '../core/buff-list';
import BuffForm from '../core/buff-form';

import { cleanBuffInited, smartFetchBuffs } from '../../actions';

import { connect } from 'react-redux';

const BuffsPage = ({ buffs, currentBuff, cleanBuffInited, smartFetchBuffs }) => {

  useEffect(() => {
    smartFetchBuffs()
  }, [smartFetchBuffs])

  return (
    <div className="page">
      <div className="page__wrapper">
        <div className="page__title">
          <div>Buffs page</div>
        </div>
        <div className="page__section page__section--grower">
          <BuffList />
        </div>
        {
          currentBuff ? (
            <div className="page__section page__section--nopadding" style={{'maxHeight': '250px'}}>
              <BuffForm />
            </div>
          ) : (
            <div className="page__section page__section--nopadding">
              <button 
                className="button button--success button--lg"
                onClick={cleanBuffInited}
                >
                <i className="fa fa-plus button__icon"></i>
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
}

const mapStateToProps = ({ buffs, currentBuff }) => {
  return {
    buffs,
    currentBuff
  }
}

const mapDispatchToProps = {
  cleanBuffInited,
  smartFetchBuffs
}

export default connect(mapStateToProps, mapDispatchToProps)(BuffsPage);