import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FlatMenu} from "./flat-menu/flat-menu.module";

@NgModule({
    imports:      [
        BrowserModule,
        FlatMenu
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

