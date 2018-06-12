import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CodeService } from '../../services/code.service';
import { Store } from '@ngrx/store';
import { State } from '../../common/reducers';

@Component({
  selector: 'app-add-code-modal',
  templateUrl: './add-code-modal.component.html',
  styleUrls: ['./add-code-modal.component.css']
})
export class AddCodeModalComponent implements OnInit {

  addCodeForm: FormGroup;
  @Output() close = new EventEmitter();

  constructor(private fb: FormBuilder, private authService: AuthService, private codeService: CodeService, private store: Store<State>) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.addCodeForm = this.fb.group({
      name: [''],
      keyCode: [''],
    });
  }

  addCode() {
    this.codeService.addCode({name: this.addCodeForm.value.name, keyCode: this.addCodeForm.value.keyCode, id: this.authService.user.id})
      .subscribe((v) => {
        this.codeService.addCodeInStore(v); this.closeModal();
      }, (err: HttpErrorResponse) => {
        this.store.dispatch({ type: 'SET_ERROR_MESSAGE', payload: err.error });
      }
    );
  }

  closeModal() {
    this.close.emit();
  }
}
