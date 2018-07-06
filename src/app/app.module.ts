import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { developerReducer } from './reducer/developer.reducer';
import { ExampleFormComponent } from './components/example-form/example-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      developer: developerReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
