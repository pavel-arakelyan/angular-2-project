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
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var tabs_service_ts_1 = require('./service/tabs.service.ts');
var tab_component_ts_1 = require('./component/tab/tab.component.ts');
var AppComponent = (function () {
    function AppComponent(tabService, translate) {
        this.tabService = tabService;
        this.translate = translate;
        this.title = 'Sample tabs Navigation';
        this.tabs = [];
        this.languages = ['en', 'ru'];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.tabService.getTabs()
            .then(function (tabs) { return _this.tabs = tabs; });
    };
    AppComponent.prototype.isCurrentLang = function (lang) {
        return lang === this.translate.currentLang;
    };
    AppComponent.prototype.selectLang = function (lang) {
        // set default;
        this.translate.use(lang);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, tab_component_ts_1.TabComponent],
            providers: [
                tabs_service_ts_1.TabService
            ]
        }), 
        __metadata('design:paramtypes', [tabs_service_ts_1.TabService, ng2_translate_1.TranslateService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map