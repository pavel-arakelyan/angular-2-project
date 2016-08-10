"use strict";
var router_1 = require('@angular/router');
var portfolio_component_ts_1 = require('./component/portfolio/portfolio.component.ts');
var dashboard_component_ts_1 = require('./component/dashboard/dashboard.component.ts');
var routes = [
    {
        path: '',
        redirectTo: '/portfolio',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_ts_1.DashboardComponent /*,
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: OverviewComponent },
            { path: 'spec', component: SpecComponent }
        ]*/
    },
    {
        path: 'portfolio',
        component: portfolio_component_ts_1.PortfolioComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map