import {NavigationItem} from './navigation.item';

export class SubTab implements NavigationItem{
    id: number;
    name: string;
    routeLink: string;
    selected: boolean;

    constructor(id:number, name:string, routeLink: string) {
        this.id = id;
        this.name = name;
        this.routeLink = routeLink;
    }
}