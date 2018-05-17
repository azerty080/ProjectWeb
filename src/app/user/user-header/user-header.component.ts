import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { State } from '../../common/reducers';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService, private store: Store<State>) {
    store.select('auth').subscribe((v) => {console.log(v); this.user = v});
  }

  ngOnInit() {

  }

  logout() {
    this.authService.logout();
  }

}
