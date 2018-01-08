import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CBIService {
	champ: String;
  constructor (
    private _http: Http
  ) {}

  initService(champ:String){
	  this.champ = champ;
  }
  
  getLore() {	  
    return this._http.get(`localhost:8080/cbi/lore/{champ}`)
    .map(res => res.json());
  }
  
  getStats() {	  
    return this._http.get(`localhost:8080/cbi/stats/{champ}`)
    .map(res => res.json());
  }
  
  getDifficulty() {	  
    return this._http.get(`localhost:8080/cbi/difficulty/{champ}`)
    .map(res => res.json());
  }
  
  getSpells() {	  
    return this._http.get(`localhost:8080/cbi/spells/{champ}`)
    .map(res => res.json());
  }
  
  getPassive() {	  
    return this._http.get(`localhost:8080/cbi/passive/{champ}`)
    .map(res => res.json());
  }
}