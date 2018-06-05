import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../common/reducers';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
  errorMessage: string;

  constructor(private store: Store<State>) {
    store.select('errorMessage').subscribe((v) => { this.errorMessage = v; this.setTimer(); });
  }

  ngOnInit() {
  }

  setTimer() {
    if (this.errorMessage !== '') {
      setTimeout(() => {
        this.store.dispatch({ type: 'CLEAR_ERROR_MESSAGE', payload: "" });
      }, 3000);
    }
  }

}
