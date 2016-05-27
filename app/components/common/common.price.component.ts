import { Component, Input } from '@angular/core';
import { IPrice } from '../../data-interfaces/iprice';

@Component({
    selector: 'common-price-component',
    templateUrl: '../app/templates/common.price.component.html'
})
export class CommonPriceComponent {
    @Input() prices:IPrice[] = [];
    @Input() showMessage:boolean = false;
}