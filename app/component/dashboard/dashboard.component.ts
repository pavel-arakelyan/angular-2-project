import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tab } from '../../model/tab';
import { TabService } from '../../service/tabs.service.ts';
import { TabComponent } from '../tab/tab.component.ts';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/component/dashboard/dashboard.component.html',
    styleUrls: ['app/component/dashboard/dashboard.component.css'],
    directives: [TabComponent]
})
export class DashboardComponent {

}