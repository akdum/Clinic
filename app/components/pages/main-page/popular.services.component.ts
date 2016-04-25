import { Component, OnInit } from 'angular2/core';
import { ServicesService } from '../../../services/services.service';
import { Service } from '../../../data-interfaces/service';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'popular-services-component',
    templateUrl: '../app/templates/popular.services.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class PopularServicesComponent implements OnInit{   
    private _servicesList: Service[];
    
    constructor(private _services: ServicesService){
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
}