import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IGAService } from './iga.service';

@Component({
  selector: 'iga-root',
  templateUrl: './iga.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IGAService]
  })
export class IGAComponent implements OnInit {
  title = 'League of Analysis';
  subtitle = 'Ingame analysis';
  summoner = '';
  server = '';
  getData: string;
  postData: string;
  
  constructor(
    private router: Router,
	private igaService: IGAService) { }

  onKeySumm(event: any) {
    this.summoner = event.target.value;
  }
  onKeyServer(event: any) {
    this.server = event.target.value;
  }
  
  igaLookup(){
	  //request....
	  // für aufruf this.summoner...;
  }
  
  //EXAMPLE BEGIN!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  onTestGet() {
	  this.igaService.getTime()
		.subscribe(
			data => this.getData = JSON.stringify(data),
			error => alert(error),
			() => console.log("Fin")
		);
  }
  
  onTestPost() {
	this.igaService.postJSON()
		.subscribe(
			data => this.postData = JSON.stringify(data),
			error => alert(error),
			() => console.log("Fin")
		);
  }
  //EXAMPLE END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
  ngOnInit(): void {
  }
}
