import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../../../services/services.service';
import { Service } from '../../../data-interfaces/service';
import { CommonPriceComponent } from '../../common/common.price.component';

@Component({
    templateUrl: '../app/templates/prices.page.component.html',
    directives: [CommonPriceComponent]
})
export class PricesPageComponent implements OnInit {
    private _services: Service[] = [];
    
    constructor(private _service:ServicesService) {
    }
    
    ngOnInit() {
        this._service.getServices().then(function(data) {
                if (data) {
                    this._services = data;
                }
            }.bind(this));
    }
}