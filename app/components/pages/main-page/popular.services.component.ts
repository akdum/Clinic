import { Component, OnInit } from 'angular2/core';
import { ServicesService } from '../../../services/services.service';
import { UtilitiesService } from '../../../services/utilities.service';
import { Service } from '../../../data-interfaces/service';

@Component({
    selector: 'popular-services-component',
    templateUrl: '../app/templates/popular.services.component.html'
})
export class PopularServicesComponent implements OnInit{   
    private _rows = [];
    private _servicesList: Service[];
    
    constructor(private _services: ServicesService, private _utilities: UtilitiesService){
    }
    
    ngOnInit() {
        this.getServices();
    }
    
    getServices() {
         this._services.getPopularServices().then(function (data) {
             if (data && data.length > 0) {
                 this._servicesList = data;
                 this._rows = this._utilities.prepareRows(this._servicesList, this._rows);
             }
         }.bind(this));
    } 
}