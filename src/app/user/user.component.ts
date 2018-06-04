import { Component } from '@angular/core';
import { CodeService } from '../services/code.service';
import { AuthService } from '../services/auth.service';

import 'rxjs/add/operator/filter';
import { Store } from '@ngrx/store';
import { State } from '../common/reducers';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  codes: Array<any> = [];
  page: string;
  isAddingCode = false;
  isEditingCode = false;
  view: any = [{
    "name": "",
    "value": 0
  }];

  constructor(private codeService: CodeService, private authService: AuthService, private store: Store<State>, private questionService: QuestionService) {
    store.select('codes').filter((v) => v != null).subscribe((v) => { this.codes = v.codes; });
    store.select('userNavigation').subscribe((v) => this.page = v);
  }

  openAddingModal() {
    this.isAddingCode = true;
  }

  closeAddingModal() {
    this.isAddingCode = false;
  }

  openEditingModal() {
    this.isEditingCode = true;
  }

  closeEditingModal() {
    this.isEditingCode = false;
  }

  deleteCode(id) {
    this.codeService.deleteCode(id);
  }

  editCode(args) {
    // this.codeService.editCode(args);
  }

  setPage(page) {
    this.store.dispatch({type: 'SET_PAGE', payload: page});
    console.log(page == 'codes' && this.codes.length > 0);
  }

  getQuestions(keyCode) {
    this.questionService.getQuestions(keyCode, 1).subscribe((v) => {
      this.view = v;
    });
  }
}
