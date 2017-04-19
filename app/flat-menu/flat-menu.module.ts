import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FlatMenuVertical} from "./flat-menu.component";
import {RouterModule} from "@angular/router";
import {HarmonicaMenu} from "./harmonica-menu.component";
import {TogglerDirective} from "./toggler.directive";


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        TogglerDirective,
        FlatMenuVertical,
        HarmonicaMenu
    ],
    exports: [
        TogglerDirective,
        FlatMenuVertical,
        HarmonicaMenu,
        RouterModule
    ]
})

export class FlatMenu {}
// todo: rename components to make some sense
