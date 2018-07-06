import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from '../../app.state';

import { ExampleFormComponent } from './example-form.component';

describe('ExampleFormComponent', () => {
  let component: ExampleFormComponent;
  let store: Store<AppState>;
  let fixture: ComponentFixture<ExampleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleFormComponent],
      providers: [Store],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleFormComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
