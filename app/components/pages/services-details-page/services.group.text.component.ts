import { Component, Input } from 'angular2/core';
import { IText } from '../../../data-interfaces/itext';

@Component({
    selector: 'services-group-text-component',
    templateUrl: '../app/templates/services.group.text.component.html'
})
export class ServicesGroupTextComponent {
    private _text: IText[] = [];
    
    @Input()
    set text(text:IText[]) {
        if (text && text.length > 0) {
            this._text = text;
        }
    }
}