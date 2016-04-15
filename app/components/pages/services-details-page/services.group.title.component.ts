import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'services-group-title-component',
    templateUrl: '../app/templates/services.group.title.component.html',
    inputs: ['title']
})
export class ServicesGroupTitleComponent implements OnInit {
    public title: string;
    
    constructor() { }

    ngOnInit() { }

}