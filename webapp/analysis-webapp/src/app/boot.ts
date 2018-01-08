import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {Router} from "@angular/router";
import {Http} from "@angular/http";

//noinspection TypeScriptValidateTypes
platformBrowserDynamic().bootstrapModule(AppComponent, [Router, Http])