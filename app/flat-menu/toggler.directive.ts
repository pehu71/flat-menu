import {Directive, HostListener} from '@angular/core';

declare let $: any;

@Directive({
    selector: '[toggler]'
})

export class TogglerDirective {

    @HostListener('click', ['$event.target'])
    onClick(trg: any) {

        let uls = $(trg).siblings('ul').first();

        if (uls.hasClass('hidden')) {
            uls.removeClass('hidden')
        } else {
            uls.addClass('hidden')
        }
    }

    expanded: boolean;

    constructor () {}



}
