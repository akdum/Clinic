import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'services-group-back-component',
    templateUrl: '../app/templates/services.group.back.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class ServicesGroupBackComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}