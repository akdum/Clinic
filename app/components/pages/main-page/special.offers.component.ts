import { Component, OnInit } from 'angular2/core';
import { SpecialOffersService } from '../../../services/special.offers.service';

@Component({
    selector: 'special-offers-component',
    templateUrl: '../app/templates/special.offers.component.html'
})
export class SpecialOffersComponent implements OnInit {
    public specialOffers: String[] = [];
    
    constructor(private _offers: SpecialOffersService) {
    }
    
    ngOnInit() {
        this.getSpecialOffers();
    }
    
    getSpecialOffers() {
         this._offers.getSpecialOffers().then(function (data) {
             this.specialOffers = data;
         }.bind(this))
    }
}