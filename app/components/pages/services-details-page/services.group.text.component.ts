import { Component, Input } from 'angular2/core';
import { IText } from '../../../data-interfaces/itext';
import { TextViewModel } from '../../../data-interfaces/text.viewmodel';

@Component({
    selector: 'services-group-text-component',
    templateUrl: '../app/templates/services.group.text.component.html'
})
export class ServicesGroupTextComponent {
    private _text: TextViewModel[] = [];
    
    @Input()
    set text(text:IText[]) {
        if (text && text.length > 0) {
            this._text = text.map(val=> new TextViewModel(val.heading, val.value, false, val.imagesBase64));
        }
    }
    
    toggle(text:TextViewModel) {
        text.isExpanded = !text.isExpanded;
    }
}