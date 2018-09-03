import { reducer, initialState } from './loading.reducer';
import * as LoadingActions from '../_actions/loading.actions';

describe('LoadingReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const action = {} as any;
      const state = reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('TOGGLE_LOADING action', () => {
    it('should set isActive to true', () => {
      const action = new LoadingActions.ToggleLoading();
      const state = reducer(initialState, action);

      expect(state.isActive).toEqual(true);
    });
  });
});

