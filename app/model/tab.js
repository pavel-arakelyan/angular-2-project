"use strict";
var Tab = (function () {
    function Tab(id, messageId, routeLink, messageService) {
        this.id = id;
        this.messageId = messageId;
        var lang = '';
        messageService.getCurrentLanguage().subscribe(function (language) { return lang = language; });
        console.log(lang);
        this.routeLink = lang + '/' + routeLink;
    }
    return Tab;
}());
exports.Tab = Tab;
//# sourceMappingURL=tab.js.map