/* THIS ACTION FILE IS JUST AS EXAMPLE. DELETE IT TO START USING THIS SCAFFOLDING */
import { Action } from '@ngrx/store';

export const ADD_NOTIFICATION = '[NOTIFICATION] Add';

export class AddNotification implements Action {
  readonly type = ADD_NOTIFICATION;

  constructor(public payload: string) {}
}

export type Actions = AddNotification;
