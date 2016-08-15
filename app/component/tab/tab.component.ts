import { Component, Input, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Tab } from '../../model/tab';
import {SubTabComponent} from "../subtab/subtab.component";
import {MessageService} from "../../service/message.service";
import {LanguageService} from "../../service/language.service";

@Component({
    selector: 'tab',
    templateUrl: 'app/component/tab/tab.component.html',
    styleUrls: ['app/component/tab/tab.component.css'],
    directives: [ROUTER_DIRECTIVES, SubTabComponent]
})
export class TabComponent implements OnInit{
    @Input() tab: Tab;
    tabTitle:string;

    constructor(private messageService:MessageService, private languageService:LanguageService) {
    }


    ngOnInit():any {
      this.languageService.getCurrentLanguage().subscribe((lang) =>{
          this.tabTitle = this.messageService.getMessage(this.tab.messageId, lang);
      })
    }
}
