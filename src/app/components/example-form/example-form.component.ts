/* THIS ACTION FILE IS JUST AS EXAMPLE. DELETE IT TO START USING THIS SCAFFOLDING */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddDeveloper } from '../../actions/developer.actions';
import { AppState } from '../../app.state';
import { Developer } from '../../models/developer.model';
import { ProgrammingLanguages } from '../../models/programming-languages.enum';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.css']
})
export class ExampleFormComponent implements OnInit {
  developers: Developer[];
  newDeveloperForm: FormGroup;
  newDeveloperNameFormControl: FormControl;
  newDeveloperProgrammingLanguageFormControl: FormControl;
  programmingLanguages: string[];

  constructor(private store: Store<AppState>) {
    store.select('developer').subscribe((developers) => {
      this.developers = developers;
    });
  }

  ngOnInit() {
    this.newDeveloperForm = this.buildForm();
    this.programmingLanguages = Object.keys(ProgrammingLanguages);
  }

  buildForm() {
    this.newDeveloperNameFormControl = new FormControl();
    this.newDeveloperProgrammingLanguageFormControl = new FormControl(ProgrammingLanguages.JAVA);
    return new FormGroup({
      name: this.newDeveloperNameFormControl,
      programmingLanguage: this.newDeveloperProgrammingLanguageFormControl
    })
  }

  addDeveloper() {
    this.store.dispatch(new AddDeveloper({
      name: this.newDeveloperForm.get('name').value,
      programmingLanguage: this.newDeveloperForm.get('programmingLanguage').value,
    }));

    this.newDeveloperNameFormControl.reset();
    this.newDeveloperProgrammingLanguageFormControl.setValue(ProgrammingLanguages.JAVA);
  }
}
