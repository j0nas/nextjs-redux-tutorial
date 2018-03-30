const defaultState = {
  count: 0,
};

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const incrementCounter = () => ({ type: INCREMENT_COUNTER });

const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const decrementCounter = () => ({ type: DECREMENT_COUNTER });

export default (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, count: state.count + 1 };

    case DECREMENT_COUNTER:
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
};