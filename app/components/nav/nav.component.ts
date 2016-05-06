import { Component, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { EnrollComponent } from './enroll.component';

@Component({
    selector: 'nav-component',
    templateUrl: '../app/templates/nav.component.html',
    directives: [EnrollComponent, ROUTER_DIRECTIVES]
})
export class NavComponent {
    @Output() onOpenEnrollModalNav = new EventEmitter<boolean>();
    
    onOpenEnrollModalHandler(open:boolean){
        this.onOpenEnrollModalNav.emit(open);
    }
}