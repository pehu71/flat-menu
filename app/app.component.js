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
                routerLink: ['/cunt', { color: 'pink' }],
                items: [
                    {
                        label: 'Stratocaster',
                        icon: 'fa-plus',
                        items: [
                            { label: 'Fender' },
                            { label: 'Squier' },
                            { label: 'SX' },
                            { label: 'Jackson' }
                        ]
                    },
                    {
                        label: 'Les Paul',
                        items: [
                            { label: 'Kramer Guitars' },
                            { label: 'Gibson', routerLink: ['/'] },
                            { label: 'Jolana' }
                        ]
                    },
                    { label: 'Flying-V' },
                    { label: 'Mockingbird' },
                    { label: 'Superstrat' }
                ]
            },
            {
                label: 'Acoustic guitars',
                icon: 'fa-edit',
                items: [
                    { label: 'Jumbo', icon: 'fa-mail-forward' },
                    { label: 'Blue Grass', icon: 'fa-mail-reply' },
                    { label: 'For children' },
                    { label: 'Signature models' }
                ]
            },
            {
                label: 'Accessories',
                icon: 'fa-edit',
                items: [
                    { label: 'Strings', icon: 'fa-mail-forward' },
                    { label: 'Pick-ups', icon: 'fa-mail-reply' },
                    { label: 'Bridges' },
                    { label: 'Tremolos' },
                    { label: 'Stands', icon: 'fa-mail-forward' },
                    { label: 'Tuners', icon: 'fa-mail-reply' },
                    { label: 'Metronomes' }
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