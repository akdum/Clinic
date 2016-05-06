///<reference path="../../../typings/browser/ambient/jquery/index.d.ts" />
import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { NgForm } from '@angular/common';

import { EnrollData } from '../../data-interfaces/enroll.data';

@Component({
    selector: 'enroll-modal-component',
    templateUrl: '../app/templates/enroll.modal.component.html'
})
export class EnrollModalComponent implements OnInit {
    public model: EnrollData;
    private _modal: JQuery;
    private MODAL_ID = "enroll-modal";
    private _isOpened = false;
    
    @Input() 
    set open(open:boolean) {
        if (this._modal && open) {
            this._modal.modal({backdrop: false});
            this._isOpened = true;
        }
    }
    
    @Output() onCloseEnrollModal = new EventEmitter<boolean>();
    
    constructor() {
        this.model = new EnrollData("","","");
    }
    
    ngOnInit() {
        this._modal = $("#" + this.MODAL_ID);
    }
    
    onEnroll() {
        console.log(JSON.stringify(this.model));
        this.emitClose();
    }
    
    dismiss() {
        this.emitClose();     
    }
    
    emitClose() {
        this._modal.modal('hide');
        this._isOpened = false;
        this.onCloseEnrollModal.emit(false);
    }
}