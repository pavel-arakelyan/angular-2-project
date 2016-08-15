import { Observable } from 'rxjs/Observable';
import { Injectable, OnInit } from '@angular/core';
import {IMessageService} from "./message.service.interface";
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {LanguageService} from "./language.service";

const messages:any = {
    en:{
       "tab.dashboard" : "[en]Dashboard",
       "tab.portfolio" : "[en]Portfolio"
    },
    ru:{
        "tab.dashboard" : "[ru]Dashboard",
        "tab.portfolio" : "[ru]Portfolio"
    }
};

@Injectable()
export class MessageService implements IMessageService {

    constructor(private languageService: LanguageService){
        languageService.useLanguage('en')
    };

    getMessage(id:string, lang:string):string {
        return messages[lang][id];
    }
}
