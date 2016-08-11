import {NavigationItem} from './navigation.item';

export class SubTab implements NavigationItem{
    id: number;
    messageId: string;
    routeLink: string;
    selected: boolean;

    constructor(id:number, messageId: string, routeLink: string) {
        this.id = id;
        this.messageId = messageId;
        this.routeLink = routeLink;
    }
}