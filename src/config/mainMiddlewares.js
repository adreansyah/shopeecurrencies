import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';

/**
 *
 * Reducers
 */

import flowCurrencies from './reducers/flowCurrency';

/**
 *
 * Reducers
 */

/**
 *
 * Epics
 */
import { epicCurrencies } from './epic/epicCurrency';

/**
 *
 * Epics
 */

export const rootReducer = combineReducers({
  flowCurrencies,
});

export const SetupEpicCombines = combineEpics(epicCurrencies);
