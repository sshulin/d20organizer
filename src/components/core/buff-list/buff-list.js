import React from 'react';
import BuffListItem from '../buff-list-item';
import { connect } from 'react-redux';

import './buff-list.css';

const BuffList = ({buffs}) => {
  return (
    <div>
      {
        buffs.map((buff) => {
          return (
            <BuffListItem key={buff.name} buff={buff}/>
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

export default connect(mapStateToProps)(BuffList);