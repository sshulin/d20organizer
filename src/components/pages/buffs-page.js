import React from 'react';
import BuffList from '../core/buff-list';

const BuffsPage = () => {

  return (
    <div className="page">
      <div className="page__wrapper">
        <div className="page__title">
          <div>Buffs page</div>
        </div>
        <div className="page__section page__section--grower">
          <BuffList />
        </div>
      </div>
    </div>
  );
}

export default BuffsPage;