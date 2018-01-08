import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CSService } from './cs.service';

@Component({
  selector: 'cs-root',
  templateUrl: './cs.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CSService]
})
export class CSComponent implements OnInit{
  title = 'League of Analysis';
  subtitle = 'Champion statistics';
  champ = '';
  
  constructor(
    private router: Router) { }

  onKeyChamp(event: any) {
    this.champ = event.target.value;
  }
	
  ngOnInit(): void {
  }
}
