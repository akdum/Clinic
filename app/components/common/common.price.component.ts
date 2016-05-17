import { Component, Input } from '@angular/core';

@Component({
    selector: 'common-price-component',
    templateUrl: '../app/templates/common.price.component.html'
})
export class CommonPriceComponent {
    @Input() price:string;
}