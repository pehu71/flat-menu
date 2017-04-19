import {Directive, HostListener, Input} from '@angular/core';

declare let $: any;

@Directive({
    selector: '[toggler]'
})

export class TogglerDirective {

    @Input()     expanded: boolean;

    @HostListener('click', ['$event.target'])
    onClick(trg: any) {

        let uls;

        if ($(trg).is('a')) {
            uls = $(trg).siblings('ul').first();
        } else {
            uls = $(trg).parent('a').siblings('ul').first();
        }

        uls.animate({
            height: ['toggle', 'swing']
        }, 555, 'linear');
    }



    constructor () {}



}
