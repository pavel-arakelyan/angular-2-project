import { Component, Input, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Tab } from '../../model/tab';
import {SubTabComponent} from "../subtab/subtab.component";
import {MessageService} from "../../service/message.service";

@Component({
    selector: 'tab',
    templateUrl: 'app/component/tab/tab.component.html',
    styleUrls: ['app/component/tab/tab.component.css'],
    directives: [ROUTER_DIRECTIVES, SubTabComponent]
})
export class TabComponent implements OnInit{
    @Input() tab: Tab;
    //@Input() currentLanguage: string;


    constructor(private messageService:MessageService) {
    }


    ngOnInit():any {
      
    }
}
