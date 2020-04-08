import React from 'react';
import BuffListItem from '../buff-list-item';
import { connect } from 'react-redux';

import { buffDeleted, buffSelected } from '../../../actions';

const BuffList = ({buffs, buffDeleted, buffSelected}) => {

  const buffDeleteWrapper = (buffData) => {
    buffDeleted(buffData.code)
  }

  const buffEditWrapper = (buffData) => {
    buffSelected(buffData.code)
  }

  return (
    <div>
      {
        buffs.map((buff) => {
          return (
            <BuffListItem
              key={buff.name}
              buff={buff}
              onDelete={buffDeleteWrapper}
              onEdit={buffEditWrapper}
              />
          )
        })
      }
    </div>
  )
}

const mapStateToProps = ({ buffs }) => {
  return {
    buffs
  }
}

const mapDispatchToProps = {
  buffDeleted,
  buffSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(BuffList);