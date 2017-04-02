import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
    selector: 'flat-menu-vertical',
    template: `
        <div class="fm-container" (mouseleave)="rootMouseLeave($event)">
            <ul>

                <li *ngFor="let item of items; index as i;" (mouseenter)="rootItemMouseEnter(i)">{{item['label']}}
                    <div class="show-panel {{'sp-' + i}}">
                        <div class="col-lg-12">

                            <div *ngFor="let level2 of item.items; index as j;" class="col-lg-4">
                                <h6>{{level2.label}}</h6>

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

    constructor () {}

    ngOnInit(): void {
        this.items = [
            {
                label: 'Electric guitars',
                items: [{
                    label: 'Stratocaster',
                    icon: 'fa-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                    {label: 'Les Paul'},
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
                    {label: 'Tremolos'}
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
