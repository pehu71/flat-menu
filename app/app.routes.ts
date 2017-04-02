import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from "./index.component";


export const routes: Routes = [
    {path: '', component: IndexComponent},
    {path: 'cunt', component: IndexComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
