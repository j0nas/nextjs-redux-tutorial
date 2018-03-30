import React from 'react';
import withRedux from 'next-redux-wrapper';
import Link from 'next/link';
import { decrementCounter, incrementCounter } from "../ducks/counterDuck";
import createStore from "../store";

const Counter = ({ count, increment, decrement }) => (
  <div>
    <button onClick={decrement}>-</button>
    {count}
    <button onClick={increment}>+</button>
    <div>
      <Link href="/">Index</Link>
    </div>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = {
  increment: incrementCounter,
  decrement: decrementCounter,
};

export default withRedux(createStore, mapStateToProps, mapDispatchToProps)(Counter);
