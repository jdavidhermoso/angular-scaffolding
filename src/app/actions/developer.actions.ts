/* THIS ACTION FILE IS JUST AS EXAMPLE. DELETE IT TO START USING THIS SCAFFOLDING */

import { Action } from '@ngrx/store';
import { Developer } from '../models/developer.model';

export const ADD_DEVELOPER = '[DEVELOPER] Add';
export const REMOVE_DEVELOPER = '[DEVELOPER] Remove';

export class AddDeveloper implements Action {
  readonly type = ADD_DEVELOPER;

  constructor(public payload: Developer) {
  }
}

export class RemoveDeveloper {
  readonly type = REMOVE_DEVELOPER;

  constructor(public payload: Developer) {

  }
}

export type Actions = AddDeveloper | RemoveDeveloper;

