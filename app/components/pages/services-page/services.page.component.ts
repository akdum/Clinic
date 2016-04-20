import { Component, OnInit} from 'angular2/core';
import { Service } from '../../../data-interfaces/service';
import { ServicesService } from '../../../services/services.service';
import { ServicesGroup } from '../../../data-interfaces/services.group';
import { Router } from 'angular2/router';

@Component({
    templateUrl: '../app/templates/services.page.component.html'
})
export class ServicesPageComponent implements OnInit {
    private _servicesData: any[];
    
    constructor(private _services: ServicesService, private _router: Router) {
    }
    
    ngOnInit() {
        this._services.getServicesGrouped().then(function(data){
            this._servicesData = data;
        }.bind(this));
    }
    
    gotoServicesGroupDetail(servicesGroup: ServicesGroup){
        let link = ['ServicesGroupDetailsPage', { url: servicesGroup.url }];
        this._router.navigate(link);
    }
    
    gotoServiceDetails(service: Service) {
        let link = ['ServiceDetailsPage', { url: service.url }];
        this._router.navigate(link);
    }
    
}