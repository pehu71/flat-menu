import {Component, OnInit} from '@angular/core';
import {MenuItem} from "./flat-menu/models";

@Component({
    selector: 'my-app',
    templateUrl: 'app/tpl/app.html'
})
export class AppComponent implements OnInit {

    constructor () {}

    items: MenuItem[];

    ngOnInit(): void {
        this.items = [
            {
                label: 'Electric guitars',
                items: [
                    {
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

}
