import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { scene1, scene2, scene3, scene3a, scene3b, scene4 } from './dialogs/day-one';
import { Store } from '@ngrx/store';
import { State } from '../common/reducers';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  text: String;
  counter: any = 0;
  scene: any = 1;
  canvasElement: any;
  modalElement: any;
  showModal: Boolean = false;

  constructor(private store: Store<State>, private questionService: QuestionService) { }

  ngOnInit() {
    this.text = scene1[0].dialog;
    this.canvasElement = document.getElementById('canvas');
    this.modalElement = document.getElementsByTagName('app-question-modal')[0];
  }

  next() {
    if (this.scene == 1 && this.counter < scene1.length - 1) {
      this.counter = this.counter + 1;
      this.text = scene1[this.counter].dialog;
      return;
    } else if (this.scene == 1) {
      this.resetCounter();
      this.newScene();
    }

    if (this.counter == 0 && this.scene == 2) {
      this.canvasElement.classList.add('classroom');
    }

    if (this.scene == 2 && this.counter < scene2.length) {
      this.text = scene2[this.counter].dialog;
      this.counter = this.counter + 1;
      return;
    } else if (this.scene == 2 && this.counter == scene2.length) {
      this.resetCounter();
      this.newScene();
    }

    if (this.counter == 0 && this.scene == 3) {
      this.canvasElement.classList.add('playground');
    }

    if (this.scene == 3 && this.counter == 2) {
      this.store.dispatch({ type: 'SET_MODAL', payload: true });
      return;
    }

    if (this.scene == 3 && this.counter < scene3.length) {
      this.text = scene3[this.counter].dialog;
      this.counter = this.counter + 1;
      return;
    } else if (this.scene == 3 && this.counter == scene3.length) {
      this.store.dispatch({ type: 'SET_MODAL', payload: true });
      this.store.dispatch({ type: 'SET_QUESTION_NUMBER', payload: 1 });
      this.scene = 3.5;
      return;
    }

    if (this.scene == 3.5 && this.counter < scene3b.length) {
      this.text = scene3b[this.counter].dialog;
      this.counter = this.counter + 1;
      return;
    } else if (this.scene == 3.5 && this.counter == scene3b.length) {
      this.resetCounter();
      this.scene = 4;
    }

    if (this.scene == 4 && this.counter < scene4.length) {
      this.text = scene4[this.counter].dialog;
      this.counter = this.counter + 1;
      return;
    }
  }

  resetCounter() {
    this.counter = 0;
  }

  newScene() {
    this.scene = this.scene + 1;
  }

  emitChoice(v) {
    v.question = v.question + 1;
    this.questionService.postQuestion(v).subscribe((x) => {
      this.setNextDialog(v.question - 1, v.index);
      this.store.dispatch({ type: 'SET_MODAL', payload: false });
    });
  }

  setNextDialog(q, i) {
    switch(this.scene) {
      case 3: {
         if ( i == 0 && q == 0 ) {
          this.resetCounter();
          this.text = scene3a[this.counter].dialog;
         } else {
           this.counter = this.counter + 1;
           this.next();
         }

         break;
      }
      case 3.5: {
        if ( i == 0 && q == 1 ) {
          this.counter = 2;
        } else {
          this.resetCounter();
        }
        this.next();

        break;
      }
      default: {
         //statements;
         break;
      }
   }
  }
}
