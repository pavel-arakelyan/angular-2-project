import { Observable } from 'rxjs/Observable';
export interface IMessageService {

    getMessage(id: string, lang:string):string;

}