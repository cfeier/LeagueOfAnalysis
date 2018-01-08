import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CBIComponent } from './cbi.component';
import { CSComponent } from './cs.component';
import { IGAComponent } from './iga.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CBIComponent,
    CSComponent,
    IGAComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
