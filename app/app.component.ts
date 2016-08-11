import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

import { Tab } from './model/tab';
import { TabService } from './service/tabs.service.ts';
import { TabComponent } from './component/tab/tab.component.ts';

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

    constructor(private tabService: TabService, private translate: TranslateService) {

    }

    ngOnInit() {
        this.translate.setDefaultLang('en');
        this.translate.use('en');
        this.tabService.getTabs()
            .then(tabs => this.tabs = tabs);
    }

    isCurrentLang(lang: string) {
        return lang === this.translate.currentLang;
    }

    selectLang(lang: string) {
        // set default;
        this.translate.use(lang);
    }

 /*   initTranslate(translate: TranslateService): void{
        let userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';

        // optional, default is "en"
        translate.setDefaultLang('en');
        console.log(translate.getLangs());

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(userLang);
        const value = translate.getTranslation(userLang);
        value.subscribe(next => console.log(next['Dashboard']));
    }*/
}
