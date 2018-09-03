import * as LoadingActions from './loading.actions';

describe('Loading Actions', () => {
  describe('ToggleLoading', () => {
    it('should create an action', () => {
      const action = new LoadingActions.ToggleLoading();

      expect({ ...action }).toEqual({
        type: LoadingActions.TOGGLE_LOADING
      });
    });
  });
});
