import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "./models";

declare let $: any;

@Component({
    selector: 'flat-menu-vertical',
    template: `
        <div class="fm-container" (mouseleave)="rootMouseLeave($event)">
            <ul>

                <li *ngFor="let item of items; index as i" (mouseenter)="rootItemMouseEnter(i)">{{item?.label}}
                    <div class="show-panel {{'sp-' + i}}">
                        <div class="col-lg-12 col-md-12">

                            <div *ngFor="let level2 of item.items" class="col-lg-4 col-md-4">
                                <h5>{{level2.label}}</h5>

                                <ul *ngIf="level2?.items">
                                    <li *ngFor="let level3 of level2.items" class="level3">
                                        {{level3?.label}}
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
