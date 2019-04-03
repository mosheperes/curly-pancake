import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counterChange: EventEmitter<null> = new EventEmitter<null>();
  counter: number;
  output: string;

  constructor() {
    this.counter = 0;
    // `this.counter.counter(

      // () => this.output = this.count.toString());
  }

  decreaseCounter() {
    this.counter--;
    this.counterChange.emit();
  }

  increaseCounter() {
    this.counter++;
    this.counterChange.emit();
   // this.increaseCounter = this.addS.transform(this.counter, this.stars);   // pipe that adds stars
   // this.output = this.counter + ' ' + this.stars;
  }
}
