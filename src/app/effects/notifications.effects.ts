import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { map, mapTo, tap } from 'rxjs/operators';
import { ADD_DEVELOPER } from '../actions/developer.actions';
import { ADD_NOTIFICATION, AddNotification } from '../actions/notification.actions';
import { NotificationsService } from '../services/notifications.service';

@Injectable()
export class NotificationsEffects {
  @Effect({ dispatch: false })
  public addNotification$: Observable<any> = this.actions$.pipe(
    ofType(ADD_NOTIFICATION),
    map((action: AddNotification) => action.payload),
    tap((message) => {
      this.notificationsService.getNotifier().next(message);
    })
  );

  constructor(private actions$: Actions, private notificationsService: NotificationsService) {
  }
}
