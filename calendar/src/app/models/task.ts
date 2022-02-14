export class Task{
    dueDate: Date;
    name: string;
    uuid: number;

    constructor(dueDate: Date, name: string){
        this.uuid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.dueDate = dueDate;
        this.name = name;
    }
}
