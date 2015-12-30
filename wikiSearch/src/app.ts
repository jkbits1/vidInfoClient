/**
 * Created by Jon on 27/11/15.
 */

//our root app component
import {Component, FORM_DIRECTIVES, CORE_DIRECTIVES, Observable, EventEmitter} from 'angular2/angular2';
import {Http, URLSearchParams} from 'angular2/http';
import {JSONP_PROVIDERS, Jsonp} from 'angular2/http';

//var url = "http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK";
//var url = "http://localhost:9090/vidInfo";
//var url = "http://localhost:9090/vidInfo?callback=JSONP_CALLBACK";
//var url = "http://localhost:9090/vidInfo?callback=JSON_CALLBACK";
var url = "http://localhost:9090/vidInfo/";
var urlCb = "?callback=JSON_CALLBACK";



@Component({
    selector: 'my-app',
    providers: [JSONP_PROVIDERS],
    template: `
<div>
    Wikipedia Search
<input #search type="text" (keyup)="keyup($event)">
<ul>
    <li *ng-for="#result of results">
      {{result.titleNumber}} {{result.length}}
    </li>
</ul>
<pre>{{ search.value | json }}</pre>
</div>
`,
directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class App {
    searches: EventEmitter = new EventEmitter();

    constructor(http:Http, jsonp:Jsonp) {
        this.searches._subject
            .debounceTime(500)
            .distinctUntilChanged()
            .switchMap(term => {
                //working plunker http://plnkr.co/edit/P8dELQZ6HlglomXSvOcj?p=preview
                var params = new URLSearchParams();
                
                var url2;
                params.append('action', 'opensearch');
                params.append('search', encodeURI(term));
                params.append('format', 'json');
                params.append('fileName', encodeURI(term));

                //return jsonp.request(url, {search: params})
                //return http.get("http://en.wikipedia.org/w/api.php?callback=JSON_CALLBACK", {search: params})
                
                url2 = url + term + urlCb;
                return http.get(url2, {search: params})
                    .map(res => {
                        return res.json()
                    });
            })
            .subscribe((term) => {
                console.log('Searching term: ' + term);
                this.results = term.map((val, idx) => {
                    return {
                        titleNumber: val.titleNumber,
                        length: val.length
                    }
                });
            },
                error => {
                    console.error('Error loading Wikipedia article.')
                },
                () => {
                    console.log('Completed!')
                }
            );
    }

    keyup($event){
        this.searches.next($event.currentTarget.value);
    }
}
