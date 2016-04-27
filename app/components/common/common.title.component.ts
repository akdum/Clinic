import { Component } from 'angular2/core';

@Component({
    selector: 'common-title-component',
    templateUrl: '../app/templates/common.title.component.html',
    inputs: ['title']
})
export class CommonTitleComponent {
    public title: string;
}