import React from 'react';

import './grid.scss';

const Grid = props => {
  return (
    <section>
      <div>{props.children}Grid Content</div>
    </section>
  );
};

export default Grid;
