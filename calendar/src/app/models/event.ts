export class Event{
    startDate: Date;
    endDate: Date;
    name: string;
    uuid: number;
    recurring: boolean;
    recurringFrequency: string;
    recurringUntil: Date;

    constructor(
        startDate: Date,
        endDate: Date,
        name: string,
        recurring: boolean = false,
        recurringFrequency: string = null,
        recurringUntil: Date = null
    ) {
        this.uuid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.startDate = startDate;
        this.endDate = endDate;
        this.name = name;
        this.recurring = recurring;
        this.recurringFrequency = recurringFrequency;
        this.recurringUntil = recurringUntil;
    }
}
