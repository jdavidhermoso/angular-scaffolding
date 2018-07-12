/* THIS ACTION FILE IS JUST AS EXAMPLE. DELETE IT TO START USING THIS SCAFFOLDING */
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../../services/notifications.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  show: boolean = false;
  message: string = '!';

  constructor(private notificationsService: NotificationsService) {
  }

  ngOnInit() {
    this.notificationsService.getNotifier().subscribe((message) => {

      if (message) {
        this.show = true;
        this.message = message;

        setTimeout(() => {
          this.show = false;
          this.message = '';
        }, 3000);
      }
    });
  }

  showMessage(message) {
    this.message = message;
    this.show = true;
  }
}
