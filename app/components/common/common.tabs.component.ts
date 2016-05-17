import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ITab } from '../../data-interfaces/itab';

@Component({
    selector: 'common-tabs-component',
    templateUrl: '../app/templates/common.tabs.component.html'
})
export class CommonTabsComponent {
    private _activeTab: string;
    private _tabs: ITab[];
    @Output() onChangeActiveTab = new EventEmitter<string>();
    
    @Input() 
    set tabs(tabs:ITab[]) {
        if (tabs && tabs.length > 0) {
            this._activeTab = tabs[0].internalName;
            this._tabs = tabs;
        }    
    }
    
    IsTabActive(name) {
        return name == this._activeTab;
    } 
    
    SetActiveTab($event) {
        this._activeTab = $event.target.id;
        this.onChangeActiveTab.emit(this._activeTab);
    }
}