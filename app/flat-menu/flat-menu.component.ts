import {Component, OnInit} from '@angular/core';

declare let $: any;

@Component({
    selector: 'flat-menu-vertical',
    template: `
        <div class="fm-container" (mouseleave)="rootMouseLeave($event)">
            <ul>
                
                <li *ngFor="let item of items; index as i;" (mouseenter)="rootMouseEnter($event, i)">{{item['label']}}
                    <div class="show-panel {{'sp-' + i}}">
                        <div class="col-lg-12">
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
                    label: 'New',
                    icon: 'fa-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Acoustic guitars',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            },
            {
                label: 'Accessories',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            }
        ];
    }

    rootMouseEnter(event: any, index: number): void {
        let myClass: string = `div[class="show-panel sp-${index}"]`;
        $(myClass).attr('style', 'display:block')
        // document.querySelector(myClass).setAttribute('style', 'display:block')
    }

    rootMouseLeave(event: any, index: number): void {
        $('.show-panel').attr('style', 'display:none')
        // document.querySelector('div.show-panel').setAttribute('style', 'display:none')
    }

}
