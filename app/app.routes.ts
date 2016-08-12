import { provideRouter, RouterConfig }  from '@angular/router';

import { PortfolioComponent } from './component/portfolio/portfolio.component.ts';
import { DashboardComponent } from './component/dashboard/dashboard.component.ts';

import {OverviewComponent} from "./component/dashboard/overview/overview.component";
import {SpecComponent} from "./component/dashboard/spec/spec.component";

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/en/portfolio',
        pathMatch: 'full'
    },
    {
        path: ':lang/dashboard',
        component: DashboardComponent/*,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: OverviewComponent },
            { path: 'spec', component: SpecComponent }
        ]*/
    },
    {
        path: ':lang/portfolio',
        component: PortfolioComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];