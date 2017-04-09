import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FlatMenuVertical} from "./flat-menu.component";
import {RouterModule} from "@angular/router";
import {HarmonicaMenu} from "./harmonica-menu.component";


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        FlatMenuVertical,
        HarmonicaMenu
    ],
    exports: [
        FlatMenuVertical,
        HarmonicaMenu,
        RouterModule
    ]
})

export class FlatMenu {}
// todo: rename components to make some sense
