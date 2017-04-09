/**
 * Custom accordion menu.
 */
import {Component, Input} from '@angular/core';
import {MenuItem} from "./models";

@Component({
    selector: 'harmonica-menu',
    template: `
        <div class="fm-container-harmonica">
            <ul class="har-level1" *ngIf="depth > 0">
                
                <li *ngFor="let item of items; index as i">
                    <a [routerLink]="item?.routerLink">
                        <img *ngIf="item.image" class="menu-image" src="{{item.image}}">
                        {{item?.label}}
                    </a>
                    
                    <ul class="har-level2" *ngIf="item?.items?.length > 0 && depth > 1">
                        <li *ngFor="let level2 of item.items">
                            <div>
                                <a [routerLink]="level2?.routerLink">{{level2.label}}</a>
                            </div>
                            
                            <ul class="har-level3" *ngIf="level2?.items && depth > 2">
                                <li *ngFor="let level3 of level2.items">
                                    <div>
                                        <a [routerLink]="level3?.routerLink">{{level3?.label}}</a>
                                    </div>
                                </li>
                            </ul>
                            
                        </li>
                    </ul>
                    
                </li>
            </ul>
        </div>
    `
})

export class HarmonicaMenu {

    @Input('menuItems') items: MenuItem[];
    @Input() depth: number = 2;

    constructor() {}


}