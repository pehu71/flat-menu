import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {FlatMenu} from "./flat-menu/flat-menu.module";
import {routing, appRoutingProviders} from "./app.routes";
import {IndexComponent} from "./index.component";

@NgModule({
    imports:      [
        BrowserModule,
        routing,
        FlatMenu
    ],
    declarations: [ AppComponent, IndexComponent ],
    providers: [appRoutingProviders],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

