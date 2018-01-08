import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IGAComponent } from './iga.component';
import { CSComponent } from './cs.component';
import { CBIComponent } from './cbi.component';

const routes: Routes = [
  { path: '', redirectTo: '/iga', pathMatch: 'full' },
  { path: 'iga', component: IGAComponent },
  { path: 'cs', component: CSComponent },
  { path: 'cbi', component: CBIComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
