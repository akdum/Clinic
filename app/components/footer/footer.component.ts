import {Component, Output, EventEmitter} from 'angular2/core';
import {ContactsFooterComponent} from './contacts.footer.component';
import { EnrollFooterComponent } from './enroll.footer.component';
import { NavFooterComponent } from './nav.footer.component';

@Component({
    selector: 'footer-component',
    templateUrl: '../app/templates/footer.component.html',
    directives: [ContactsFooterComponent, EnrollFooterComponent, NavFooterComponent]
})
export class FooterComponent {
    @Output() onOpenEnrollModalFooter = new EventEmitter<boolean>();
    
    onOpenEnrollModalHandler(open:boolean){
        this.onOpenEnrollModalFooter.emit(open);
    }
}