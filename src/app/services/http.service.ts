import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlHttp = 'http://localhost:3000/api';

  constructor(private http: Http) { }

  httpGet(url) {
    return this.http.get(this.urlHttp + url).pipe(map((res) => res.json()));
  }

  httpPost(url, data) {
    return this.http.post(this.urlHttp + url, data).pipe(map((res) => res.json()));
  }

}
