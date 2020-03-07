import { combineReducers} from 'redux';
import { memberReducer, memberState } from './memberReducer';
import {filtersReducer,filtersState} from './filtersReducer';

export interface State {  
  memberReducer : memberState;
  filtersReducer: filtersState;
};

export const reducers = combineReducers<State>({
  memberReducer,
  filtersReducer
});
