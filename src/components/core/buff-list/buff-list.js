import React from 'react';
import BuffListItem from '../buff-list-item';
import { connect } from 'react-redux';

import { buffDeleted } from '../../../actions';

const BuffList = ({buffs, buffDeleted}) => {

  const buffDeleteWrapper = (buffData) => {
    buffDeleted(buffData.code)
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
  buffDeleted
};

export default connect(mapStateToProps, mapDispatchToProps)(BuffList);