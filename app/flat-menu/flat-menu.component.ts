import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
    selector: 'flat-menu-vertical',
    template: `
        <div class="fm-container" (mouseleave)="rootMouseLeave($event)">
            <ul>

                <li *ngFor="let item of items; index as i" (mouseenter)="rootItemMouseEnter(i)">{{item?.label}}
                    <div class="show-panel {{'sp-' + i}}">
                        <div class="col-lg-12">

                            <div *ngFor="let level2 of item.items" class="col-lg-4">
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

    items: Array<Object>;

    constructor() {
    }

// todo: define model, not to fail production build, must be same as for PrimeNg slideMenu
    ngOnInit(): void {
        this.items = [
            {
                label: 'Electric guitars',
                items: [{
                    label: 'Stratocaster',
                    icon: 'fa-plus',
                    items: [
                        {label: 'Fender'},
                        {label: 'Squier'},
                        {label: 'SX'},
                        {label: 'Jackson'}
                    ]
                },
                    {
                        label: 'Les Paul',
                        items: [
                            {label: 'Kramer Guitars'},
                            {label: 'Gibson'},
                            {label: 'Jolana'}
                        ]
                    },
                    {label: 'Flying-V'},
                    {label: 'Mockingbird'},
                    {label: 'Superstrat'}
                ]
            },
            {
                label: 'Acoustic guitars',
                icon: 'fa-edit',
                items: [
                    {label: 'Jumbo', icon: 'fa-mail-forward'},
                    {label: 'Blue Grass', icon: 'fa-mail-reply'},
                    {label: 'For children'},
                    {label: 'Signature models'}
                ]
            },
            {
                label: 'Accessories',
                icon: 'fa-edit',
                items: [
                    {label: 'Strings', icon: 'fa-mail-forward'},
                    {label: 'Pick-ups', icon: 'fa-mail-reply'},
                    {label: 'Bridges'},
                    {label: 'Tremolos'},
                    {label: 'Stands', icon: 'fa-mail-forward'},
                    {label: 'Tuners', icon: 'fa-mail-reply'},
                    {label: 'Metronomes'}
                ]
            }
        ];
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
