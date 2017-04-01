import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'flat-menu-vertical',
    template: `
        <div class="fm-container">
            <ul>
                <li data-name="li-1" (mouseenter)="rootMouseEnter($event, 1)" (mouseleave)="rootMouseLeave($event, 1)">fizz
                    <div class="show-panel">
                        <div class="col-lg-12">
                            
                            <div class="col-lg-4">
                                <h6>Title of cat level 2-1</h6>
                                <ul>
                                    <li>sub-fizz-1</li>
                                    <li>sub-fizz-2</li>
                                    <li>sub-fizz-3</li>
                                </ul>
                            </div>

                            <div class="col-lg-4">
                                <h6>Title of cat level 2-2</h6>
                                <ul>
                                    <li>sub-fizz-1</li>
                                    <li>sub-fizz-2</li>
                                    <li>sub-fizz-3</li>
                                </ul>
                            </div>

                            <div class="col-lg-4">
                                <h6>Title of cat level 2-3</h6>
                                <ul>
                                    <li>sub-fizz-1</li>
                                    <li>sub-fizz-2</li>
                                    <li>sub-fizz-3</li>
                                </ul>
                            </div>

                            <div class="col-lg-4">
                                <h6>Title of cat level 2-4</h6>
                                <ul>
                                    <li>sub-fizz-1</li>
                                    <li>sub-fizz-2</li>
                                    <li>sub-fizz-3</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </li>
                <li>bauzz</li>
                <li>bar</li>
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
                label: 'File',
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
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward'},
                    {label: 'Redo', icon: 'fa-mail-reply'}
                ]
            }
        ];
    }

    rootMouseEnter(event: any, index: number): void {
        console.log(['eneter'], event, index)
    }

    rootMouseLeave(event: any, index: number): void {
        console.log(['leave', event, index])
    }

}
