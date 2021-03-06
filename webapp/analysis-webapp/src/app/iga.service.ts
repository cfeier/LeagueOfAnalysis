import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class IGAService {
  constructor (
    private _http: Http
  ) {}

  getTime() {	  
    return this._http.get(`http://date.jsontest.com`)
    .map(res => res.json());
  }
  
  postJSON() {
	var json = JSON.stringify({var1: 'test', var2: 2});
	var params = 'json=' + json;
	var headers = new Headers();
	headers.append('Content-Type', 
	'application/x-www-form-urlencoded');
	
	return this._http.post('http://validate.jsontest.com', 
	params, {
			headers: headers
	})
	.map(res => res.json());
  }

}