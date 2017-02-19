import { Component } from '@angular/core';

// import {FORM_DIRECTIVES, CORE_DIRECTIVES, Observable, EventEmitter} from 'angular2/angular2';
// import {FORM_DIRECTIVES} from '@angular/core';
import {Observable} from 'rxjs/Observable';
// import { WheelCalcs } from './wheelCalcs';

// import { Subject, BehaviorSubject }    from 'rxjs5';
import { Subject, BehaviorSubject }    from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works, hooray xyz!';
}

