import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { ServicesService } from '../../../services/services.service';
import { Service } from '../../../data-interfaces/service';

@Component({
    selector: 'popular-services-component',
    templateUrl: '../app/templates/popular.services.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class PopularServicesComponent implements OnInit{   
    private _servicesList: Service[];
    
    constructor(private _services: ServicesService, private _router: Router){
    }
    
    ngOnInit() {
        this.getServices();
    }
    
    getServices() {
         this._services.getServicesToShowOnMainPage().then(function (data) {
             if (data && data.length > 0) {
                 this._servicesList = data;
             }
         }.bind(this));
    } 
    
    gotoServiceDetails(service:Service) {
        let link = ['ServiceDetailsPage', { url: service.url }];
        this._router.navigate(link);
    }
}