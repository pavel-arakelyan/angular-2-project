import { Observable} from 'rxjs/Observable';
import { Observer} from 'rxjs/Observer';
import { Injectable, OnInit } from '@angular/core';
import {IMessageService} from "./message.service.interface";
import {TRANSLATE_PROVIDERS, TranslateService, TranslatePipe, TranslateLoader, TranslateStaticLoader} from 'ng2-translate/ng2-translate';
import {ILanguageService} from "./language.service.interface";

const LANGUAGES:Array<string> = ['en','ru'];

@Injectable()
export class LanguageService implements ILanguageService{

    private defaultLang:string = 'en';
    private observer:Observer<string>;
    // private currentLang:Observable<string> = Observable.of(this.lang);
    private currentLang:Observable<string>;

    constructor(){
        this.currentLang = Observable.create((observer:Observer<string>)=>{
            this.observer = observer;
            observer.next(this.defaultLang);
        });
    };

    getCurrentLanguage():Observable<string> {
        return this.currentLang;
    }

    getLanguages():Array<string> {
        return LANGUAGES;
    }

    getLanguage(id:number):string {
        return LANGUAGES[id];
    }

    useLanguage(lang:string):void {
        this.observer.next(lang);
    }

    setDefaultLanguage(lang:string):void {
        this.defaultLang = lang;
        this.observer.next(lang);
    }
}
