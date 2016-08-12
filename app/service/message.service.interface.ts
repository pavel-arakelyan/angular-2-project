import { Observable } from 'rxjs/Observable';
export interface IMessageService {

    getMessage(id: number, lang: string):string;
    
    getCurrentLanguage():Observable<string>;
    
    getLanguages():Array<string>;
    
    getLanguage(id:number):string;
    
    useLanguage(lang:string):Observable<any>;//or langId
    
    setDefaultLanguage(lang:string):void;//or langId

}