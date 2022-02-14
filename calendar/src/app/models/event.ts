export class Event{
    startDate: Date;
    endDate: Date;
    name: string;
    uuid: number;

    constructor( startDate: Date , endDate: Date, name: string){
        this.uuid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
    }
}
