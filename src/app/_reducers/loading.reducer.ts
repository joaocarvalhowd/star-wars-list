import { Action } from '@ngrx/store';
import { Loading } from '../_models/loading';
import * as LoadingActions from '../_actions/loading.actions';

export const initialState: Loading = {
  isActive: false
};

export function reducer(state: Loading = initialState, action: Action) {
  switch (action.type) {
    case LoadingActions.TOGGLE_LOADING:
      return {
        ...state,
        isActive: !state.isActive
      };
    default:
      return state;
  }
}
