import {NavigationItem} from './navigation.item';
import {SubTab} from "./subTab";

export class Tab implements NavigationItem{
    id: number;
    name: string;
    routeLink: string;
    selected: boolean;
    subTabs: SubTab[];
    
    constructor(id:number, name:string, routeLink: string) {
        this.id = id;
        this.name = name;
        this.routeLink = routeLink;
    }
}
