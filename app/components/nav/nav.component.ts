import { Component, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { GetDiscountComponent } from './get.discount.component';

@Component({
    selector: 'nav-component',
    templateUrl: '../app/templates/nav.component.html',
    directives: [ROUTER_DIRECTIVES, GetDiscountComponent]
})
export class NavComponent {
}