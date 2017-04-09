import {Component} from '@angular/core';
import {MenuItem} from "./flat-menu/models";

@Component({
    templateUrl: 'app/tpl/index.html'
})

export class IndexComponent {

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
                        items: [
                            {label: 'Fender'},
                            {label: 'Squier'},
                            {label: 'SX'},
                            {label: 'Jackson'}
                        ]
                    },
                    {
                        label: 'Les Paul',
                        image: 'img/pracky/small/w1.jpg',
                        items: [
                            {label: 'Kramer Guitars'},
                            {label: 'Gibson', routerLink: ['/']},
                            {label: 'Jolana'}
                        ]
                    },
                    {
                        label: 'Flying-V',
                        image: 'img/pracky/small/w3.jpg'
                    },
                    {label: 'Mockingbird'},
                    {label: 'Superstrat'}
                ]
            },
            {
                label: 'Acoustic guitars',
                image: 'img/pracky/small/w2.jpg',
                items: [
                    {label: 'Jumbo', icon: 'fa-mail-forward'},
                    {label: 'Blue Grass', icon: 'fa-mail-reply'},
                    {label: 'For children'},
                    {label: 'Signature models'}
                ]
            },
            {
                label: 'Accessories',
                image: 'img/pracky/small/w5.jpg',
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