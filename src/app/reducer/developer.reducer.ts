/* THIS REDUCER FILE IS JUST AS EXAMPLE. DELETE IT TO START USING THIS SCAFFOLDING */
import { Developer } from '../models/developer.model';
import { ProgrammingLanguages } from '../models/programming-languages.enum';
import * as DeveloperActions from '../actions/developer.actions';

const initialState: Developer = {
  name: 'David',
  programmingLanguage: ProgrammingLanguages.JAVASCRIPT
};

export function developerReducer(state: Developer[] = [initialState], action: DeveloperActions.Actions) {
  switch(action.type) {
    case DeveloperActions.ADD_DEVELOPER:

      return [...state, action.payload];
    default:
      return state;
  }
}
