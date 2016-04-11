import { Component, Output, EventEmitter } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
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