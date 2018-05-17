import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../common/reducers';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private store: Store<State>) {
    store.select('auth').subscribe((v) => {this.user = v});
  }

  ngOnInit() {

  }

}
