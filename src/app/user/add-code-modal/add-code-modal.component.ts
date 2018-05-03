import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CodeService } from '../../services/code.service';

@Component({
  selector: 'app-add-code-modal',
  templateUrl: './add-code-modal.component.html',
  styleUrls: ['./add-code-modal.component.css']
})
export class AddCodeModalComponent implements OnInit {

  addCodeForm: FormGroup;
  @Output() close = new EventEmitter();

  constructor(private fb: FormBuilder, private authService: AuthService, private codeService: CodeService) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
		this.addCodeForm = this.fb.group({
			name: [''],
      key: [''],
		})
  }

  addCode() {
    this.codeService.addCode({name: this.addCodeForm.value.name, key: this.addCodeForm.value.key, id: this.authService.user.id});
  }

  closeModal() {
    this.close.emit();
  }
}
