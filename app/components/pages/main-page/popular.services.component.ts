import { Component, OnInit } from 'angular2/core';
import { ServicesService } from '../../../services/services.service';
import { Service } from '../../../data-interfaces/service';

@Component({
    selector: 'popular-services-component',
    templateUrl: '../app/templates/popular.services.component.html'
})
export class PopularServicesComponent implements OnInit{   
    private _servicesListFirstRow: Service[] = [];
    private _servicesListSecondRow: Service[] = [];
    
    constructor(private _services: ServicesService){
    }
    
    ngOnInit() {
        this.getServices();
    }
    
    getServices() {
         this._services.getShortListOfServices(3).then(function (data) {
             this._servicesListFirstRow = data;
         }.bind(this))
         this._services.getRangeOfServices(3,6).then(function (data) {
             this._servicesListSecondRow = data;
         }.bind(this))
    } 
}