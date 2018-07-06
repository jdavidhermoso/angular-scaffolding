import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map, mapTo, switchMap, tap } from 'rxjs/operators';
import { ADD_DEVELOPER, AddDeveloper } from '../actions/developer.actions';
import { AddNotification } from '../actions/notification.actions';
import { pathOr } from 'ramda';

@Injectable()
export class DeveloperEffects {
  @Effect()
  public addReportRecordStarts$: Observable<Action> = this.actions$.pipe(
    ofType(ADD_DEVELOPER),
    map((action: AddDeveloper) => {
      const developerName = action.payload.name;
      const developerLanguage = action.payload.programmingLanguage;
      return `${action.payload.name} has been added, and he knows ${action.payload.programmingLanguage}`
    }),
    map((message) => new AddNotification(message))
  );

  constructor(private actions$: Actions) {
  }
}
