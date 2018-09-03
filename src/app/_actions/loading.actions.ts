import { Action } from '@ngrx/store';

export const TOGGLE_LOADING = '[LOADING] Toggle';

export class ToggleLoading implements Action {
  readonly type = TOGGLE_LOADING;
}

export type Actions = ToggleLoading;
