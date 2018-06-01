import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { scene1, scene2, scene3 } from './dialogs/day-one';

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

  constructor() { }

  ngOnInit() {
    this.text = scene1[0].dialog;
    this.canvasElement = document.getElementById('canvas');
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

    if (this.scene == 3 && this.counter < scene3.length) {
      this.text = scene3[this.counter].dialog;
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
}
