import React from 'react';

import './deck.scss';

const Deck = props => {
  const deckType = [props.type];
  const classes = ['deck', ...deckType].join(' ');
  return <section className={classes}>{props.children}</section>;
};

export default Deck;

Deck.defaultProps = {
  children: [
    <section class="deck">
    <header><h2>Title</h2></header>
    <nav>
        <ul>
            <li><a href='#card1'>Card 1</a></li>
            <li><a href='#card2'>Card 2</a></li>
        </ul>
    </nav>
    <div id="card1" class="card">...</div>
    <div id="card2" class="card">...</div>
</section>
  ],
};
