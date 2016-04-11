import { Component, EventEmitter, Output } from 'angular2/core';

@Component({
    selector: 'enroll-footer-component',
    templateUrl: '../app/templates/enroll.footer.component.html'
})
export class EnrollFooterComponent {
    @Output() onOpenEnrollModal = new EventEmitter<boolean>();
    
    openEnrollModal() {
        this.onOpenEnrollModal.emit(true);
    }
    
}