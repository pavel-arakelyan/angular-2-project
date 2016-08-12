import {NavigationItem} from './navigation.item';
import {SubTab} from "./subTab";
import {MessageService} from "../service/message.service";

export class Tab implements NavigationItem{
    id: number;
    messageId: string;
    routeLink: string;
    selected: boolean;
    subTabs: SubTab[];
    
    constructor(id:number, messageId:string, routeLink: string, messageService: MessageService) {
        this.id = id;
        this.messageId = messageId;
        let lang: string = '';
        messageService.getCurrentLanguage().subscribe(language => lang = language);
        console.log(lang);
        this.routeLink = lang + '/' + routeLink;
    }
}
