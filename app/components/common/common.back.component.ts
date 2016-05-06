import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';

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