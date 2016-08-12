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
var tab_1 = require('../../model/tab');
var subtab_component_1 = require("../subtab/subtab.component");
var message_service_1 = require("../../service/message.service");
var TabComponent = (function () {
    //@Input() currentLanguage: string;
    function TabComponent(messageService) {
        this.messageService = messageService;
    }
    TabComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', tab_1.Tab)
    ], TabComponent.prototype, "tab", void 0);
    TabComponent = __decorate([
        core_1.Component({
            selector: 'tab',
            templateUrl: 'app/component/tab/tab.component.html',
            styleUrls: ['app/component/tab/tab.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, subtab_component_1.SubTabComponent]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], TabComponent);
    return TabComponent;
}());
exports.TabComponent = TabComponent;
//# sourceMappingURL=tab.component.js.map