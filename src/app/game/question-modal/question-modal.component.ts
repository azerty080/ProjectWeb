import { Component, OnInit, trigger, state, style, transition, animate, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../common/reducers';
import { questions } from '../dialogs/question';

@Component({
  selector: 'app-question-modal',
  templateUrl: './question-modal.component.html',
  styleUrls: ['./question-modal.component.css'],
  animations: [
		trigger('openModal',
			[
				state('0', style({ transform: 'translateX(-50%) translateY(-50%) scale(0)', opacity: '0' })),
        state('1', style({ transform: 'translateX(-50%) translateY(-50%) scale(1)', opacity: '1' })),
			  transition('0 => 1', animate('300ms ease-in')),
			  transition('1 => 0', animate('300ms ease-out')),
			]),
	]
})
export class QuestionModalComponent implements OnInit {

  @Output() sendChoice = new EventEmitter();
  questionNumber: any;
  question: any;
  visible: Boolean;

  constructor(private store: Store<State>) {
    store.select('questionModal').subscribe((v) => this.visible = v );
    store.select('questionNumber').subscribe((v) => {this.setQuestion(v)});
  }

  ngOnInit() {
    // this.question = questions[this.questionNumber];
  }

  emitValue(v, index) {
    this.sendChoice.emit({ answer: v, question: this.questionNumber, index: index });
  }

  setQuestion(number) {
    this.questionNumber = number;
    this.question = questions[number];
  }

}
