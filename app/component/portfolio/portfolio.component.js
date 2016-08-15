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
var PortfolioComponent = (function () {
    function PortfolioComponent(route, messageService) {
        this.route = route;
        this.messageService = messageService;
        this._routeParamsSubscription = null;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        /*this._routeParamsSubscription = this.route.params.subscribe(params => {
            let lang = params["lang"];
            this.messageService.useLanguage(lang);
        });
        console.log(this.messageService.getCurrentLanguage());*/
    };
    PortfolioComponent.prototype.ngOnDestroy = function () {
        if (this._routeParamsSubscription) {
            this._routeParamsSubscription.unsubscribe();
        }
    };
    PortfolioComponent = __decorate([
        core_1.Component({
            selector: 'portfolio',
            templateUrl: 'app/component/portfolio/portfolio.component.html',
            styleUrls: ['app/component/portfolio/portfolio.component.css'],
            directives: [tab_component_ts_1.TabComponent],
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, message_service_1.MessageService])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
exports.PortfolioComponent = PortfolioComponent;
//# sourceMappingURL=portfolio.component.js.map