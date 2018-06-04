import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CodeService } from '../../services/code.service';

@Component({
  selector: 'app-code-modal',
  templateUrl: './code-modal.component.html',
  styleUrls: ['./code-modal.component.css']
})
export class CodeModalComponent implements OnInit {

  code: string;
  @Output() sendCode = new EventEmitter();

  constructor(private codeService: CodeService) { }

  ngOnInit() {
  }

  validate(keyCode) {
    this.codeService.validateCode(keyCode).subscribe((v: any) => {
      if (v) this.sendCode.emit(v);
    });
  }

  skip() {
    this.sendCode.emit(null);
  }
}
