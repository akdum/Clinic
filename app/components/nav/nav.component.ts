import { Component, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'nav-component',
    templateUrl: '../app/templates/nav.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavComponent {
}