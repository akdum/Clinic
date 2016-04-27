import { Component } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'common-back-component',
    templateUrl: '../app/templates/common.back.component.html',
    inputs: ['backRoute', 'backTitle']
})
export class CommonBackComponent {
    public backRoute:string;
    public backTitle:string;
    
    constructor(private _router:Router) { }
    
    gotoBack() {
        let link = [this.backRoute];
        this._router.navigate(link);
    }
}