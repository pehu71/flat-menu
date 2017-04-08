import {Component, Input} from '@angular/core';
import {MenuItem} from "./models";

declare let $: any;

@Component({
    selector: 'flat-menu-vertical',
    template: `
        <div class="fm-container" (mouseleave)="rootItemMouseLeave()">

            <ul class="ul-level1" *ngIf="depth > 0">

                <li *ngFor="let item of items; index as i" (mouseenter)="rootItemMouseEnter(i)">
                    <a [routerLink]="item?.routerLink" (click)="hidePanels()" id="{{'root_' + i}}">
                        <img *ngIf="item.image" class="menu-image" src="{{item.image}}">
                        {{item?.label}}
                    </a>

                    <div *ngIf="item?.items?.length > 0 && depth > 1" class="show-panel {{'sp-' + i}}">
                        <div class="col-lg-12 col-md-12">

                            <div *ngFor="let level2 of item.items" class="col-lg-4 col-md-4">
                                <p class="p-level2">
                                    <img *ngIf="level2.image" class="menu-image" src="{{level2.image}}">
                                    <a [routerLink]="level2?.routerLink" (click)="hidePanels(true)">{{level2.label}}</a>
                                </p>

                                <ul *ngIf="level2?.items && depth > 2" class="ul-level3">
                                    <li *ngFor="let level3 of level2.items">
                                        <a [routerLink]="level3?.routerLink" (click)="hidePanels(true)">{{level3?.label}}</a>
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

export class FlatMenuVertical {

    @Input('menuItems') items: MenuItem[];
    @Input('rootHoverClass') hover: string;
    @Input('fixedTop') fixed: boolean = false;
    @Input() depth: number = 2;

    constructor() {}

    rootItemMouseEnter(index: number): void {

        this.hidePanels(true);

        let showPanel: string = `div[class="show-panel sp-${index}"]`;
        let rootItem = `#root_${index}`;
        let container = '.fm-container';

        let containerHeight = $(container).height();
        let containerTop = $(container).offset().top;
        let itemTop = $(rootItem).offset().top;

        $(rootItem).addClass(this.hover);

        if (this.fixed) {
            $(showPanel).attr('style', `display:block;min-height:${containerHeight}px`);
        } else $(showPanel).attr('style', `display:block;top:${itemTop-containerTop}px`);
    }

    rootItemMouseLeave(): void {
        this.hidePanels(true)
    }

    hidePanels(removeHover?: boolean): void {
        $('.show-panel').attr('style', 'display:none');
        if (removeHover) {
            $(`.${this.hover}`).removeClass(this.hover)
        }
    }

}
