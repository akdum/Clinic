import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'slogan-component',
    templateUrl: '../app/templates/slogan.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class SloganComponent {
}