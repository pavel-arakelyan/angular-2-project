import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tab } from '../../model/tab';
import { TabService } from '../../service/tabs.service.ts';
import { TabComponent } from '../tab/tab.component.ts';
import {TranslateService} from "ng2-translate/ng2-translate";
import {MessageService} from "../../service/message.service";

@Component({
    selector: 'portfolio',
    templateUrl: 'app/component/portfolio/portfolio.component.html',
    styleUrls: ['app/component/portfolio/portfolio.component.css'],
    directives: [TabComponent],
})
export class PortfolioComponent implements OnInit, OnDestroy {
    private _routeParamsSubscription:any = null;
    private currentLanguage:string;

    constructor(private route:ActivatedRoute, private messageService: MessageService) {
    }


    ngOnInit():any {
        this._routeParamsSubscription = this.route.params.subscribe(params => {
            let lang = params["lang"];
            this.messageService.useLanguage(lang);
        });
        console.log(this.messageService.getCurrentLanguage());
    }


    ngOnDestroy():any {
        if (this._routeParamsSubscription) {
            this._routeParamsSubscription.unsubscribe();
        }
    }
}