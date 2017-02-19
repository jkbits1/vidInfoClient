import { Component, OnInit } from '@angular/core';

// import {FORM_DIRECTIVES, CORE_DIRECTIVES, Observable, EventEmitter} from '@angular2/angular2';
// import {Http, URLSearchParams} from '@angular2/http';
// import {JSONP_PROVIDERS, Jsonp} from '@angular2/http';

@Component({
  selector: 'app-rx-item',
  templateUrl: './rx-item.component.html',
  styleUrls: ['./rx-item.component.css']
})
export class RxItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// export class App {
//     searches: EventEmitter = new EventEmitter();
//     fileName: String = "";
//     titleDetailsParsed: String = "";

//     constructor(http:Http, jsonp:Jsonp) {
//         this.searches._subject
//             .debounceTime(500)
//             .distinctUntilChanged()
//             .switchMap(fileName => {
//                 //working plunker http://plnkr.co/edit/P8dELQZ6HlglomXSvOcj?p=preview
//                 var params = new URLSearchParams();
                
//                 var url2;
//                 params.append('action', 'opensearch');
//                 params.append('search', encodeURI(fileName));
//                 params.append('format', 'json');
//                 params.append('fileName', encodeURI(fileName));

//                 //return jsonp.request(url, {search: params})
//                 //return http.get("http://en.wikipedia.org/w/api.php?callback=JSON_CALLBACK", {search: params})

//                 if (fileName === undefined || fileName.length === 0) {
//                     fileName = "red-info.txt";
//                 }
                
//                 url2 = url + fileName + urlCb;
//                 return http.get(url2, {search: params})
//                     .map(res => {
//                         return res.json();
//                     });
//             })
//             .subscribe((data) => {
//                 console.log('Returned data: ' + data);
//                 this.fileName = data.fileName;
//                 this.titleDetailsParsed = JSON.parse(data.titleDetails);
//                 this.results = 
//                     // data.titleDetails
//                     this.titleDetailsParsed
//                     .map((val, idx) => {
//                     return {
//                         titleNumber: val.titleNumber,
//                         length: val.length
//                     }
//                 });
//             },
//                 error => {
//                     console.error('Error loading Wikipedia article.')
//                 },
//                 () => {
//                     console.log('Completed!')
//                 }
//             );
//     }

//     keyup($event){
//         this.searches.next($event.currentTarget.value);
//     }
// }
