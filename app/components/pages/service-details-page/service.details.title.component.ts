import { Component } from 'angular2/core';

@Component({
    selector: 'service-details-title-component',
    templateUrl: '../app/templates/service.details.title.component.html',
    inputs: ['title']
})
export class ServiceDetailsTitleComponent {
    public title: string;

}