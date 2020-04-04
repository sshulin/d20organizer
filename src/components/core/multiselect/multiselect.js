import React from 'react';

const Multiselect = ({items, selected, keyProp = 'code', nameGetter, descriptionGetter, onItemClick}) => {
  return (
    <div className="multiselect">
      <div className="multiselect__wrapper">
        {
          items.map((item) => {
            const isSelected = selected.indexOf(item[keyProp]) !== -1;
            const iconClassList = (
              'fa ' + (isSelected ? 'fa-square' : 'fa-square-o')
            )
            const onClick = () => {
              onItemClick(item);
            }

            return (
              <div
                className="multiselect__item {isSelected ? 'multiselect__item--selected' : ''}"
                onClick={onClick}
                key={item[keyProp]}
                >
                <div className="multiselect__item-icon">
                  <i 
                    className={iconClassList}></i>
                </div>
                <div className="multiselect__item-name">
                  { nameGetter(item) }
                </div>
                <div className="multiselect__item-description">
                  { descriptionGetter(item) }
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Multiselect;