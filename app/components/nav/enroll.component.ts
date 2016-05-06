///<reference path="../../../typings/browser/ambient/bootstrap/index.d.ts" />
import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'enroll-component',
    templateUrl: '../app/templates/enroll.component.html',
    inputs: ['isInNav']
})
export class EnrollComponent {
    public isInNav: Boolean;
    @Output() onOpenEnrollModal = new EventEmitter<boolean>();
    
    openEnrollModal() {
        this.onOpenEnrollModal.emit(true);
    }
}