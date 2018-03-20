import { Action } from '@ngrx/store';

export function simpleReducer(state: string = '', action: Action) {
  console.log('from simple reducer ts: ', state, action.type);

  switch (action.type) {
    case 'SPANISH': {
      return state = 'hola mundo!';
    }
    case 'FRENCH': {
      return state = 'Bonjour le monde';
    }
    default:
      return state;
  }

}
