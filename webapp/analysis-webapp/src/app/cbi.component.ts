import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CBIService } from './cbi.service';

@Component({
  selector: 'cbi-root',
  templateUrl: './cbi.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CBIService]
})
export class CBIComponent implements OnInit {
  title = 'League of Analysis';
  subtitle = 'Champion background info';
  champ = '';
  lore: String;
  stats: String;
  difficulty: String;
  spells: String;
  passive: String;
  
  constructor(
    private router: Router,
	private cbiService: CBIService) { }

  onKeyChamp(event: any) {
    this.champ = event.target.value;
  }
  
  cbiLookup() {
	  this.cbiService.initService(this.champ);
	  this.getLore();
	  this.getStats();
	  this.getDifficulty();
	  this.getSpells();
	  this.getPassive();
  }
  
  getLore() {
	  this.cbiService.getLore()
		.subscribe(
			data => this.lore = JSON.stringify(data),
			error => alert(error),
			() => console.log("Fin")
		);
  }
  
    getStats() {
	  this.cbiService.getStats()
		.subscribe(
			data => this.stats = JSON.stringify(data),
			error => alert(error),
			() => console.log("Fin")
		);
  }
  
    getDifficulty() {
	  this.cbiService.getDifficulty()
		.subscribe(
			data => this.difficulty = JSON.stringify(data),
			error => alert(error),
			() => console.log("Fin")
		);
  }
  
    getSpells() {
	  this.cbiService.getSpells()
		.subscribe(
			data => this.spells = JSON.stringify(data),
			error => alert(error),
			() => console.log("Fin")
		);
  }
  
    getPassive() {
	  this.cbiService.getPassive()
		.subscribe(
			data => this.passive = JSON.stringify(data),
			error => alert(error),
			() => console.log("Fin")
		);
  }
  
  
  ngOnInit(): void {
  }
}
