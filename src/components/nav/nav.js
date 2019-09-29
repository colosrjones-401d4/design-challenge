import React from 'react';

import '../../styles/core/_nav.scss';

const Nav = props => {
  return <nav>{props.children}</nav>;
};

export default Nav;

Nav.defaultProps = {
  children: [
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>,
  ],
};
