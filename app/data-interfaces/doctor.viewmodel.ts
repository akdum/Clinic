import { IText } from './IText';

export class DoctorViewModel {
    constructor(public name:string, public speciality:string[], public url:string, public photoUrl:string, public text:IText[]) {}
}