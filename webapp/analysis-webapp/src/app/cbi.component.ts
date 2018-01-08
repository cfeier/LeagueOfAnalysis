import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cbi-root',
  templateUrl: './cbi.component.html',
  styleUrls: ['./app.component.css']
})
export class CBIComponent implements OnInit {
  title = 'League of Analysis';
  subtitle = 'Champion background info';
  champ = '';
  
  constructor(
    private router: Router) { }

  onKeyChamp(event: any) {
    this.champ = event.target.value;
  }
  
  ngOnInit(): void {
  }
}
