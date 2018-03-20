import { Component } from '@angular/core';

// ngrx:
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// interface for AppStore:
interface AppStore {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message$: Observable<string>

  constructor( private store: Store<AppStore> ) {
    this.message$ = this.store.select('message');
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }

}
