import { IText } from './IText';

export class News {
    public date : Date;
    
    constructor(public title: string, public text: IText[], public rawdate: number, public id:number) {
        this.date = new Date(1970, 0, 1);
        this.date.setTime(rawdate);        
    }
}