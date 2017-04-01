import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'flat-menu-vertical',
    template: `
        <div class="fm-container">
            <ul>
                
                <li *ngFor="let item of items; index as i;" (mouseenter)="rootMouseEnter($event, i)" (mouseleave)="rootMouseLeave($event, i)">{{item['label']}}
                    <div class="show-panel">
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
        console.log(['eneter'], index)
    }

    rootMouseLeave(event: any, index: number): void {
        console.log(['leave', index])
    }

}
