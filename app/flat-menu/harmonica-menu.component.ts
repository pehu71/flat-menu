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
                    <a [routerLink]="item?.routerLink" #t="toggler" [toggler]="false">
                        <i *ngIf="item?.items?.length > 0" [ngClass]="{'fa-chevron-right': !t.expanded, 'fa-chevron-down': t.expanded}" class="fa right-margin-chevron" aria-hidden="true"></i>
                        <img *ngIf="item.image" class="menu-image" src="{{item.image}}">
                        {{item?.label}}
                    </a>
                    
                    <ul class="har-level2" *ngIf="item?.items?.length > 0 && depth > 1" style="display: none">
                        <li *ngFor="let level2 of item.items">
                                <a [routerLink]="level2?.routerLink" #t2="toggler" [toggler]="false">
                                    <i *ngIf="level2?.items?.length > 0" [ngClass]="{'fa-chevron-right': !t2.expanded, 'fa-chevron-down': t2.expanded}" class="fa right-margin-chevron" aria-hidden="true"></i>
                                    {{level2.label}}
                                </a>

                            
                            <ul class="har-level3" *ngIf="level2?.items && depth > 2" style="display: none">
                                <li *ngFor="let level3 of level2.items">
                                        <a [routerLink]="level3?.routerLink">{{level3?.label}}</a>
                                </li>
                            </ul>
                            
                        </li>
                    </ul>
                    
                </li>
            </ul>
        </div>
    `
})
// todo: <i class="fa fa-chevron-down" aria-hidden="true"></i>
export class HarmonicaMenu {

    @Input('menuItems') items: MenuItem[];
    @Input('multiOpen') multi: boolean;
    @Input() depth: number = 2;

    constructor() {}


}
