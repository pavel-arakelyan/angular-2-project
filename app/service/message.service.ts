import { Observable } from 'rxjs/Observable';
import { Injectable, OnInit } from '@angular/core';
import {IMessageService} from "./message.service.interface";
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';



@Injectable()
export class MessageService implements IMessageService {

    private currentLang:Observable<string> = Observable.of('en');

    constructor(private _translate: TranslateService){

    };

    getMessage(id:number, lang:string):string {
        return null;
    }

    getCurrentLanguage():Observable<string> {
        return this.currentLang;
    }

    getLanguages():Array<string> {
        return ;
    }

    getLanguage(id:number):string {
        return null;
    }

    useLanguage(lang:string):Observable<any> {
        this.currentLang = Observable.of(lang);
        return this._translate.use(lang)
    }

    setDefaultLanguage(lang:string):void {
        this.currentLang = Observable.of(lang);
        this._translate.setDefaultLang(lang);
    }
}
