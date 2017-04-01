import {Component} from '@angular/core';

@Component({
    selector: 'flat-menu-vertical',
    template: `
    <div class="fm-container">
        <ul>
            <li>fizz
                <div class="show-panel">
                    <ul>
                        <li>sub-fizz-1</li>
                        <li>sub-fizz-2</li>
                        <li>sub-fizz-3</li>
                    </ul>
                </div>
            </li>
            <li>bauzz</li>
            <li>bar</li>
        </ul>
    </div>
    `
})

export class FlatMenuVertical {}
