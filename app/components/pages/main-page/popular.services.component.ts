import { Component, OnInit } from 'angular2/core';
import { ServicesService } from '../../../services/services.service';
import { Service } from '../../../data-interfaces/service';

@Component({
    selector: 'popular-services-component',
    templateUrl: '../app/templates/popular.services.component.html'
})
export class PopularServicesComponent implements OnInit{   
    private _servicesList: Service[];
    
    constructor(private _services: ServicesService){
    }
    
    ngOnInit() {
        this.getServices();
    }
    
    getServices() {
         this._services.getPopularServices().then(function (data) {
             if (data && data.length > 0) {
                 this._servicesList = data;
             }
         }.bind(this));
    } 
}