import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FlatMenuVertical} from "./flat-menu.component";
import {RouterModule} from "@angular/router";


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [
        FlatMenuVertical
    ],
    exports: [
        FlatMenuVertical,
        RouterModule
    ]
})

export class FlatMenu {}
