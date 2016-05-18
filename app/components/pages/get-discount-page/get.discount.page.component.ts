import { Component } from '@angular/core';

import { AssetsService } from '../../../services/assets.service';

@Component({
    templateUrl: '../app/templates/get.discount.page.component.html'
})
export class GetDiscountPageComponent {
    private _printAssetUrl: string;
    private _number: string;
    private _date: string;
    
    constructor(private _assets: AssetsService) {
        this._printAssetUrl = this._assets.getUrlByName("print.jpg"); 
        this._date = this.getDate();
        this._number = Math.floor(this.getRandomArbitrary(100000,999999)).toString();
    }
    
    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    
    getDate() {
        let today = new Date();
        let dd: string;
        let mm: string; //January is 0!

        let yyyy = today.getFullYear();
        if (today.getDate()<10){
            dd ='0'+today.getDate().toString();
        } else {
            dd = today.getDate().toString();
        }
        if(today.getMonth() +1 <10){
            mm='0'+(today.getMonth() + 1).toString();
        } else {
            mm = (today.getMonth() + 1).toString();
        }
         return dd +'/' + mm+'/'+yyyy;
    }
}