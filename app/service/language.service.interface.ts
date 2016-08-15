import { Observable } from 'rxjs/Observable';
export interface ILanguageService {

    getCurrentLanguage():Observable<string>;

    getLanguages():Array<string>;

    getLanguage(id:number):string;

    useLanguage(lang:string):void;//or langId

    setDefaultLanguage(lang:string):void;//or langId

}