import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';

import { Tab } from './model/tab';
import { TabService } from './service/tabs.service.ts';
import { TabComponent } from './component/tab/tab.component.ts';
import {MessageService} from "./service/message.service";

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

    constructor(private tabService: TabService, private messageService: MessageService) {

    }

    ngOnInit() {
        //this.messageService.setDefaultLanguage('en');
        //console.log(this.messageService.getCurrentLanguage());
        //this.translate.use('en');
        this.messageService.getCurrentLanguage().subscribe(currentLang =>{
            this.currentLanguage = currentLang
        });
        this.messageService.useLanguage(this.currentLanguage);
        this.tabService.getTabs()
            .then(tabs => this.tabs = tabs);
    }

  /*  isCurrentLang(lang: string) {
        return lang === this.messageService.getCurrentLanguage();
    }*/

    selectLang(lang: string) {
        // set default;
        this.messageService.useLanguage(lang);
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
