import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FlatMenuVertical} from "./flat-menu.component";


@NgModule({
    imports: [CommonModule],
    declarations: [
        FlatMenuVertical
    ],
    exports: [
        FlatMenuVertical
    ]
})

export class FlatMenu {}
