import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  isReady: boolean = false;
  code: any;

  constructor() { }

  ngOnInit() {
  }

  setCode(v) {
    this.code = v;
    this.isReady = true;
  }
}
