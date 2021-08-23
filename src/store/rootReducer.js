import {combineReducers} from 'redux';

/**
 | ----------------------------------------------------------------
 | STORE | COMBINE APP REDUCERS
 | ----------------------------------------------------------------
 | Parent App Store Tree.
 | Register all your  reducers here.
 | 
 */
import {reducer as testReducer} from '../screens/testScreen';
import {reducer as homeReducer} from '../screens/Home';
import {reducer as movieListReducer} from '../screens/MovieList';

const appReducer = combineReducers({
  //All Screen Reducers would come here
  testReducer,
  homeReducer,
  movieListReducer,
});

/**
 * Wrapper Root Reducer
 *
 * @param {object} state
 * @param {object} action
 */
const rootReducer = (state, action) => {
  // Perform any global actions here
  return appReducer(state, action);
};

export default rootReducer;
