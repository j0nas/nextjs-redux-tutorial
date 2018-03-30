import {createStore} from "redux";
import rootReducer from '../ducks';

export default initialState => {
  const store = createStore(rootReducer, initialState);
  if (module.hot) {
    module.hot.accept('../ducks', () => store.replaceReducer(require('../ducks').default));
  }

  return store;
};