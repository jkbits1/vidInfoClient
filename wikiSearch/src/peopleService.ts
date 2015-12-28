/**
 * Created by Jon on 27/11/15.
 */

//a simple service
import {Injectable} from 'angular2/angular2';
import {Http} from 'angular2/http';

@Injectable()
export class PeopleService {
    constructor(http:Http) {
        this.people = http.get('api/people.json').map(res => res.json());
    }
}