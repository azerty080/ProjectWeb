import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CodeService } from '../../services/code.service';
import { Store } from '@ngrx/store';
import { State } from '../../common/reducers';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-code-modal',
  templateUrl: './code-modal.component.html',
  styleUrls: ['./code-modal.component.css']
})
export class CodeModalComponent implements OnInit {

  code: string;
  @Output() sendCode = new EventEmitter();

  constructor(private codeService: CodeService, private store: Store<State>) { }

  ngOnInit() {
  }

  validate(keyCode) {
    this.codeService.validateCode(keyCode).subscribe((v: any) => {
      if (v) this.sendCode.emit(v);
    }, (err: HttpErrorResponse) => {
      this.store.dispatch({ type: 'SET_ERROR_MESSAGE', payload: err.error });
    });
  }

  skip() {
    this.sendCode.emit(null);
  }
}
