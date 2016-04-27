import { Component, Input } from 'angular2/core';
import { IText } from '../../data-interfaces/itext';
import { TextViewModel } from '../../data-interfaces/text.viewmodel';
import { CONFIG } from '../../config/config';

@Component({
    selector: 'common-text-component',
    templateUrl: '../app/templates/common.text.component.html'
})
export class CommonTextComponent {
    private _text: TextViewModel[] = [];
    
    @Input() expandFirstPart: boolean = false;
    
    @Input()
    set text(text:IText[]) {
        if (text && text.length > 0) {
            this._text = text.map(val=> new TextViewModel(val.heading, 
                                                          val.value, 
                                                          false, 
                                                          val.imageNames.map(m=>CONFIG.DB.BUCKETS.TEXT_IMAGES_URL + m)));
            if (this.expandFirstPart) {
                this._text[0].isExpanded = true;
            }
        }       
    }
    
    toggle(text:TextViewModel) {
        text.isExpanded = !text.isExpanded;
    }
}