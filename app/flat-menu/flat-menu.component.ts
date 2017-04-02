import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "./models";

declare let $: any;

@Component({
    selector: 'flat-menu-vertical',
    template: `
        <div class="fm-container" (mouseleave)="rootMouseLeave($event)">

            <ul class="ul-level1">

                <li *ngFor="let item of items; index as i" (mouseenter)="rootItemMouseEnter(i)">
                    <a [routerLink]="item?.routerLink">{{item?.label}}</a>
                    <div class="show-panel {{'sp-' + i}}">
                        <div class="col-lg-12 col-md-12">

                            <div *ngFor="let level2 of item.items" class="col-lg-4 col-md-4">
                                <p class="p-level2">
                                    <a [routerLink]="level2?.routerLink">{{level2.label}}</a>
                                </p>

                                <ul *ngIf="level2?.items" class="ul-level3">
                                    <li *ngFor="let level3 of level2.items">
                                        <a [routerLink]="level3?.routerLink">{{level3?.label}}</a>
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </li>

            </ul>
        </div>
    `
})

export class FlatMenuVertical implements OnInit {

    @Input('menuItems') items: MenuItem[];

    constructor() {
        // todo: check whether jquery present, otherwise throw
    }

    ngOnInit(): void {

    }

    rootItemMouseEnter(index: number): void {
        this.hidePanels();
        let myClass: string = `div[class="show-panel sp-${index}"]`;
        $(myClass).attr('style', 'display:block')
    }

    rootMouseLeave(): void {
        this.hidePanels()
    }

    private hidePanels(): void {
        $('.show-panel').attr('style', 'display:none')
    }

}
