import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { DeveloperEffects } from './effects/developer.effects';
import { NotificationsEffects } from './effects/notifications.effects';
import { developerReducer } from './reducer/developer.reducer';
import { ExampleFormComponent } from './components/example-form/example-form.component';
import { NotificationComponent } from './components/notification/notification.component';
import { NotificationsService } from './services/notifications.service';

@NgModule({
  declarations: [
    AppComponent,
    ExampleFormComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    /* JUST AS EXAMPLE. DELETE IT TO START USING THIS SCAFFOLDING */
    StoreModule.forRoot({
      developer: developerReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    /* JUST AS EXAMPLE. DELETE IT TO START USING THIS SCAFFOLDING */
    EffectsModule.forRoot([DeveloperEffects, NotificationsEffects])
  ],
  providers: [NotificationsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
