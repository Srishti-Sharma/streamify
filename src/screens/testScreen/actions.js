import {createActions} from 'redux-actions';

// constants
import {ACTION_PREFIX, actionTypes} from './constants';
// utils
import {getActionOptions} from '../../utils/reduxactions';

/**
 | --------------------------------------------------------------------
 | ACTION CREATORS
 | --------------------------------------------------------------------
 | 
 |
 */

export const {testAction} = createActions(
  actionTypes.TEST_ACTION,
  getActionOptions(ACTION_PREFIX),
);
