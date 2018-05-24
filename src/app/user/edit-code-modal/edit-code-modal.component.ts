import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {CodeService} from '../../services/code.service';
import {UserComponent} from '../user.component';

@Component({
  selector: 'app-edit-code-modal',
  templateUrl: './edit-code-modal.component.html',
  styleUrls: ['./edit-code-modal.component.css']
})
export class EditCodeModalComponent implements OnInit {

  editCodeForm: FormGroup;
  @Output() close = new EventEmitter();

  constructor(private fb: FormBuilder, private authService: AuthService, private codeService: CodeService) {
    const code = {id: 1, codeName: 'Test', keyCode: 123456};
    this.createForm(code);
  }

  ngOnInit() {
  }

  createForm(code) {
    this.editCodeForm = this.fb.group({
      name: [code.codeName],
      keyCode: [code.keyCode],
    });
  }

  addCode() {
    this.codeService.addCode({name: this.editCodeForm.value.name, keyCode: this.editCodeForm.value.keyCode, id: this.authService.user.id})
      .subscribe((v) => { this.codeService.addCodeInStore(v); this.closeModal(); }
      );
  }

  closeModal() {
    this.close.emit();
  }
}
