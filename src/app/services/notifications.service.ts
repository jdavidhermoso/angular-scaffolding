import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notifier: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {
  }

  getNotifier() {
    return this.notifier;
  }
}
