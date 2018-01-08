import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/cbi" routerLinkActive="active">Champion background info</a>
      <a routerLink="/cs" routerLinkActive="active">Champion Statiscitcs</a>
      <a routerLink="/iga" routerLinkActive="active">Ingame Analysis</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'League of Analysis';
}
