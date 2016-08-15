import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

import { Tab } from './model/tab';
import { TabService } from './service/tabs.service.ts';
import { TabComponent } from './component/tab/tab.component.ts';
import {MessageService} from "./service/message.service";
import {LanguageService} from "./service/language.service";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES, TabComponent],
    providers: [
        TabService
    ]
})
export class AppComponent {
    title = 'Sample tabs Navigation';
    tabs: Tab[] = [];
    languages: string[] = ['en', 'ru'];
    currentLanguage:string;

    constructor(private tabService: TabService, private languageService: LanguageService) {

    }

    ngOnInit() {
        this.languageService.getCurrentLanguage().subscribe(currentLang =>{
            this.currentLanguage = currentLang
        });
        this.tabService.getTabs()
            .then(tabs => this.tabs = tabs);
    }

    isCurrentLang(lang: string) {
        return lang === this.currentLanguage;
    }

    selectLang(lang: string) {
        this.languageService.useLanguage(lang);
    }

}
