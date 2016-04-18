import { Component, OnInit } from 'angular2/core';
import { Service } from '../../../data-interfaces/service';

@Component({
    selector: 'services-group-popular-component',
    templateUrl: '../app/templates/services.group.popular.component.html',
    inputs: ['services']
})
export class ServicesGroupPopularComponent implements OnInit {
    public services: Service[];
    
    constructor() { 
    }

    ngOnInit() { }

}