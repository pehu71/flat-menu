"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'Electric guitars',
                image: 'img/pracky/small/w1.jpg',
                routerLink: ['/'],
                items: [
                    {
                        label: 'Stratocaster',
                        image: 'img/pracky/small/w5.jpg',
                        routerLink: ['/'],
                        items: [
                            { label: 'Fender', routerLink: ['/'] },
                            { label: 'Squier', routerLink: ['/'] },
                            { label: 'SX', routerLink: ['/'] },
                            { label: 'Jackson', routerLink: ['/'] }
                        ]
                    },
                    {
                        label: 'Les Paul',
                        image: 'img/pracky/small/w1.jpg',
                        routerLink: ['/'],
                        items: [
                            { label: 'Kramer Guitars', routerLink: ['/'] },
                            { label: 'Gibson', routerLink: ['/'] },
                            { label: 'Jolana', routerLink: ['/'] }
                        ]
                    },
                    {
                        label: 'Flying-V',
                        routerLink: ['/'],
                        image: 'img/pracky/small/w3.jpg'
                    },
                    { label: 'Mockingbird', routerLink: ['/'] },
                    { label: 'Superstrat', routerLink: ['/'] }
                ]
            },
            {
                label: 'Acoustic guitars',
                image: 'img/pracky/small/w2.jpg',
                routerLink: ['/'],
                items: [
                    { label: 'Jumbo', icon: 'fa-mail-forward', routerLink: ['/'] },
                    { label: 'Blue Grass', icon: 'fa-mail-reply', routerLink: ['/'] },
                    { label: 'For children', routerLink: ['/'] },
                    { label: 'Signature models', routerLink: ['/'] }
                ]
            },
            {
                label: 'Accessories',
                image: 'img/pracky/small/w5.jpg',
                routerLink: ['/'],
                items: [
                    { label: 'Strings', icon: 'fa-mail-forward', routerLink: ['/'] },
                    { label: 'Pick-ups', icon: 'fa-mail-reply', routerLink: ['/'] },
                    { label: 'Bridges', routerLink: ['/'] },
                    { label: 'Tremolos', routerLink: ['/'] },
                    { label: 'Stands', icon: 'fa-mail-forward', routerLink: ['/'] },
                    { label: 'Tuners', icon: 'fa-mail-reply', routerLink: ['/'] },
                    { label: 'Metronomes', routerLink: ['/'] }
                ]
            }
        ];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'app/tpl/app.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map