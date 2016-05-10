import { IComment } from './IComment';
import { IText } from './IText';

export class About {
    constructor(public comments:IComment[], public rights:IText[], public law:string, public photoGallery:string[]) {
        
    }
}