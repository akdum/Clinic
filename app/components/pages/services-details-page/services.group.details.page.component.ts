import { Component, OnInit } from 'angular2/core';
import { ServicesGroup } from '../../../data-interfaces/services.group';
import { RouteParams } from 'angular2/router';
import { ServicesService } from '../../../services/services.service';
import { ServicesGroupTitleComponent } from './services.group.title.component';
import { ServicesGroupBackComponent } from './services.group.back.component';

@Component({
    templateUrl: '../app/templates/services.group.details.page.component.html',
    directives: [ServicesGroupTitleComponent, ServicesGroupBackComponent]
})
export class ServicesGroupDetailsPageComponent implements OnInit {
    private _servicesGroup: ServicesGroup;
    
    constructor(private _routeParams: RouteParams, private _servicesService: ServicesService) { 
        this._servicesGroup = new ServicesGroup("","","","",[]);
    }

    ngOnInit() {
        let serviceGroupUrl = this._routeParams.get('url');
        if (serviceGroupUrl) {
            this._servicesService.getServicesGroupByUrl(serviceGroupUrl).then(function(data) {
                if (data) {
                    this._servicesGroup = data;
                }
            }.bind(this));
        }
    }

}