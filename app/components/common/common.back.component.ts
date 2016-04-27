import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'common-back-component',
    templateUrl: '../app/templates/common.back.component.html',
    inputs: ['BackRoute', 'BackTitle']
})
export class CommonBackComponent {
    public BackRoute:string;
    public BackTitle:string;
    
    constructor(private _router:Router) { }
    
    gotoBack() {
        let link = [this.BackRoute];
        this._router.navigate(link);
    }
}