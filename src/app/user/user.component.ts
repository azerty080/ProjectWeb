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

  constructor(private codeService: CodeService, private authService: AuthService, private store: Store<State>) {
    this.store.select('codesReady').filter((v) => v == true).subscribe((v) => {
        this.getCodes();
    });
  }

  getCodes() {
    this.codes = this.codeService.codes;
  }
}
