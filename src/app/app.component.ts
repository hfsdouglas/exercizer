import { Component } from '@angular/core';
import { Exercise } from './exercise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  config: boolean = false;
  exercises: Exercise[] = [{
    name: 'Abdominal',
    duration: 30,
    repetitions: 3,
    preparations: 15,
    rest: 30
  }];
}
