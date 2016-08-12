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
var Observable_1 = require('rxjs/Observable');
var core_1 = require('@angular/core');
var ng2_translate_1 = require('ng2-translate/ng2-translate');
var MessageService = (function () {
    function MessageService(_translate) {
        this._translate = _translate;
        this.currentLang = Observable_1.Observable.of('en');
    }
    ;
    MessageService.prototype.getMessage = function (id, lang) {
        return null;
    };
    MessageService.prototype.getCurrentLanguage = function () {
        return this.currentLang;
    };
    MessageService.prototype.getLanguages = function () {
        return;
    };
    MessageService.prototype.getLanguage = function (id) {
        return null;
    };
    MessageService.prototype.useLanguage = function (lang) {
        this.currentLang = Observable_1.Observable.of(lang);
        return this._translate.use(lang);
    };
    MessageService.prototype.setDefaultLanguage = function (lang) {
        this.currentLang = Observable_1.Observable.of(lang);
        this._translate.setDefaultLang(lang);
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [ng2_translate_1.TranslateService])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map