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
var router_1 = require('@angular/router');
var tab_component_ts_1 = require('../tab/tab.component.ts');
var message_service_1 = require("../../service/message.service");
var DashboardComponent = (function () {
    function DashboardComponent(route, messageService) {
        this.route = route;
        this.messageService = messageService;
        this._routeParamsSubscription = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routeParamsSubscription = this.route.params.subscribe(function (params) {
            var lang = params["lang"];
            _this.messageService.useLanguage(lang);
        });
        console.log(this.messageService.getCurrentLanguage());
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this._routeParamsSubscription) {
            this._routeParamsSubscription.unsubscribe();
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: 'app/component/dashboard/dashboard.component.html',
            styleUrls: ['app/component/dashboard/dashboard.component.css'],
            directives: [tab_component_ts_1.TabComponent]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, message_service_1.MessageService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map