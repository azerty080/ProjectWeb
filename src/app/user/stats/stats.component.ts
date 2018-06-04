import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements AfterViewInit {

  @Input() results: any;
  @Output() getQuestion = new EventEmitter();
  questionNumber: Number = 1;

  constructor() { }

  ngAfterViewInit() {
  }

  setQuestion(question) {
    this.getQuestion.emit(question);
    this.questionNumber = question;
  }
}
