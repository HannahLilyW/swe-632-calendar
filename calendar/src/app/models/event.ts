export class Event{
    startDate: Date;
    endDate: Date;
    name: string;
    constructor( startDate: Date , endDate: Date, name: string){
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
    }
}
