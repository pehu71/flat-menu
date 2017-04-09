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
                image: 'img/pracky/small/w1.jpg',
                routerLink: ['/cunt', {color:'pink'}],
                items: [
                    {
                        label: 'Stratocaster',
                        image: 'img/pracky/small/w5.jpg',
                        routerLink: ['/'],
                        items: [
                            {label: 'Fender', routerLink: ['/']},
                            {label: 'Squier', routerLink: ['/']},
                            {label: 'SX', routerLink: ['/']},
                            {label: 'Jackson', routerLink: ['/']}
                        ]
                    },
                    {
                        label: 'Les Paul',
                        image: 'img/pracky/small/w1.jpg',
                        routerLink: ['/'],
                        items: [
                            {label: 'Kramer Guitars', routerLink: ['/']},
                            {label: 'Gibson', routerLink: ['/']},
                            {label: 'Jolana', routerLink: ['/']}
                        ]
                    },
                    {
                        label: 'Flying-V',
                        routerLink: ['/'],
                        image: 'img/pracky/small/w3.jpg'
                    },
                    {label: 'Mockingbird', routerLink: ['/']},
                    {label: 'Superstrat', routerLink: ['/']}
                ]
            },
            {
                label: 'Acoustic guitars',
                image: 'img/pracky/small/w2.jpg',
                routerLink: ['/'],
                items: [
                    {label: 'Jumbo', icon: 'fa-mail-forward', routerLink: ['/']},
                    {label: 'Blue Grass', icon: 'fa-mail-reply', routerLink: ['/']},
                    {label: 'For children', routerLink: ['/']},
                    {label: 'Signature models', routerLink: ['/']}
                ]
            },
            {
                label: 'Accessories',
                image: 'img/pracky/small/w5.jpg',
                routerLink: ['/'],
                items: [
                    {label: 'Strings', icon: 'fa-mail-forward', routerLink: ['/']},
                    {label: 'Pick-ups', icon: 'fa-mail-reply', routerLink: ['/']},
                    {label: 'Bridges', routerLink: ['/']},
                    {label: 'Tremolos', routerLink: ['/']},
                    {label: 'Stands', icon: 'fa-mail-forward', routerLink: ['/']},
                    {label: 'Tuners', icon: 'fa-mail-reply', routerLink: ['/']},
                    {label: 'Metronomes', routerLink: ['/']}
                ]
            }
        ];
    }

}
