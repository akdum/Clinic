import { IText } from './IText';

export class DoctorViewModel {
    constructor(public name:string, public therapy:string, public url:string, public photoUrl:string, public text:IText[]) {}
}