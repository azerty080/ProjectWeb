import { Component } from '@angular/core';
import { CodeService } from '../services/code.service';
import { AuthService } from '../services/auth.service';

import 'rxjs/add/operator/filter';
import { Store } from '@ngrx/store';
import { State } from '../common/reducers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  codes: Array<any> = [];
  page: string;
  isAddingCode: boolean = false;

  constructor(private codeService: CodeService, private authService: AuthService, private store: Store<State>) {
    store.select('codes').filter((v) => v != null).subscribe((v) => { this.codes = v });
    store.select('userNavigation').subscribe((v) => this.page = v);
  }

  openModal() {
    this.isAddingCode = true;
  }

  closeModal() {
    this.isAddingCode = false;
  }

  deleteCode(id) {
    this.codeService.deleteCode(id);
  }

  setPage(page) {
    this.store.dispatch({type: 'SET_PAGE', payload: page});
  }
}
