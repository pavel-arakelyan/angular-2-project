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
var core_1 = require('@angular/core');
var TABS = [
    { id: 1, name: 'Dashboard', routeLink: '/dashboard', selected: false,
        subTabs: [
            { id: 1, name: 'Overview', routeLink: '/dashboard/overview', selected: false },
            { id: 2, name: 'Specification', routeLink: '/dashboard/spec', selected: false }
        ]
    },
    { id: 2, name: 'Portfolio', routeLink: '/portfolio', selected: false, subTabs: [] }
];
var TabService = (function () {
    function TabService() {
    }
    TabService.prototype.getTabs = function () {
        return Promise.resolve(TABS);
    };
    TabService.prototype.getTabsSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(TABS); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    TabService.prototype.getTab = function (id) {
        return this.getTabs()
            .then(function (tabs) { return tabs.find(function (tab) { return tab.id === id; }); });
    };
    TabService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TabService);
    return TabService;
}());
exports.TabService = TabService;
//# sourceMappingURL=tabs.service.js.map