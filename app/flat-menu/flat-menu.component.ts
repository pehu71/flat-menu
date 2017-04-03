import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "./models";

declare let $: any;

@Component({
    selector: 'flat-menu-vertical',
    template: `
        <div class="fm-container" (mouseleave)="rootItemMouseLeave($event)">

            <ul class="ul-level1">

                <li *ngFor="let item of items; index as i" (mouseenter)="rootItemMouseEnter(i)">
                    <a [routerLink]="item?.routerLink" id="{{'root_' + i}}">{{item?.label}}</a>

                    <div *ngIf="item?.items?.length > 0" class="show-panel {{'sp-' + i}}">
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
    @Input('rootHoverClass') hover: string;

    constructor() {
        // todo: add command - there is a need of closing the panel after clicking the [routerLink]
        // todo: check whether jquery present, otherwise throw
    }

    ngOnInit(): void {

    }

    rootItemMouseEnter(index: number): void {
        this.hidePanels();

        let showPanel: string = `div[class="show-panel sp-${index}"]`;
        let containerHeight = $('.fm-container').height();

        let rootItem = `#root_${index}`;
        $(rootItem).addClass(this.hover);

        $(showPanel).attr('style', `display:block;min-height:${containerHeight}px`);
    }

    rootItemMouseLeave(): void {
        this.hidePanels()
    }

    private hidePanels(): void {
        $('.show-panel').attr('style', 'display:none');
        $(`.${this.hover}`).removeClass(this.hover)
    }

}
