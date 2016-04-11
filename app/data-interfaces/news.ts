export class News {
    public date : Date;
    
    constructor(public title: string, public body: string, public rawdate: number) {
        this.date = new Date(1970, 0, 1);
        this.date.setTime(rawdate);        
    }
}