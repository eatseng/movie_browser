import React from 'react';

import './TypeaheadRow.css';

function TypeaheadRow(props) {
  const style = props.isSelected === true
    ? "typeaheadRow typeaheadHighlight"
    : "typeaheadRow typeaheadNormal";
  return (
  	<div className={style} key={props.id} onClick={props.onClick}>
      <img
        alt={props.title}
        className="typeaheadImage"
        src={`https://image.tmdb.org/t/p/w154${props.posterPath}`}
        width={45} />
      <div className='typeaheadTitle'>{props.title}</div>
  	</div>
  );
}

export default TypeaheadRow;
