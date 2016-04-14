import { Component, OnInit} from 'angular2/core';
import { ServicesService } from '../../../services/services.service';
import { Service } from '../../../data-interfaces/service';

@Component({
    templateUrl: '../app/templates/services.page.component.html'
})
export class ServicesPageComponent implements OnInit {
    private _servicesData: any[];
    
    constructor(private _services: ServicesService) {
    }
    
    ngOnInit() {
        this._services.getServicesGrouped().then(function(data){
            this._servicesData = data;
        }.bind(this));
    }
    
}