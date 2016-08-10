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
var subTab_1 = require('../../model/subTab');
var SubTabComponent = (function () {
    function SubTabComponent(_router) {
        this._router = _router;
    }
    SubTabComponent.prototype.route = function () {
        this._router.navigate([this.subTab.routeLink]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', subTab_1.SubTab)
    ], SubTabComponent.prototype, "subTab", void 0);
    SubTabComponent = __decorate([
        core_1.Component({
            selector: 'sub-tab',
            templateUrl: 'app/component/subtab/subtab.component.html',
            styleUrls: ['app/component/subtab/subtab.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SubTabComponent);
    return SubTabComponent;
}());
exports.SubTabComponent = SubTabComponent;
//# sourceMappingURL=subtab.component.js.map