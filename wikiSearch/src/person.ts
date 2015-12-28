/**
 * Created by Jon on 27/11/15.
 */

//a simple person component
import {Component, View, EventEmitter} from 'angular2/angular2'

@Component({
    selector: 'my-person',
    inputs: ['name'],
    outputs: ['hello']
})
@View({
    template: `
<div>
    <span>{{name}}</span>
<button (click)="sayHello()">Say Hello</button>
</div>
`
})
export class Person {
    hello = new EventEmitter();
    sayHello(e) {
        this.hello.next(this.name);
    }
}