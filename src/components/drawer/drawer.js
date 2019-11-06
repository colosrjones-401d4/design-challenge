import React from 'react';

import '../../styles/core/_drawer.scss';

const Drawer = props => {
  return <aside>{props.children}</aside>;
};

export default Drawer;

Drawer.defaultProps = {
  children: [<div>Steven Jones doesn't know much about drawer. Marty McFly's friend, Doc set up time for back to the future. But there is accident hit on November 5, 1955. Marty McFly got away from terriorist and he jumped to time travel car. Car got away and went to year 1955! 
</div>],
};
