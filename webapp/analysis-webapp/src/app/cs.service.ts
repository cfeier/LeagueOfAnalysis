import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CSService {
  constructor (
    private _http: Http
  ) {}

  getTime() {	  
    return this._http.get(`http://date.jsontest.com`)
    .map(res => res.json());
  }
}