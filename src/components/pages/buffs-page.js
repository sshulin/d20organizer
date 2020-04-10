import React from 'react';
import BuffList from '../core/buff-list';
import BuffForm from '../core/buff-form';

import { cleanBuffInited } from '../../actions';

import { connect } from 'react-redux';

const BuffsPage = ({ currentBuff, cleanBuffInited }) => {

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

const mapStateToProps = ({ currentBuff }) => {
  return {
    currentBuff
  }
}

const mapDispatchToProps = {
  cleanBuffInited
}

export default connect(mapStateToProps, mapDispatchToProps)(BuffsPage);