export class Task {
    dueDate: Date;
    name: string;
    uuid: number;
    recurring: boolean;
    recurringFrequency: string;
    recurringUntil: Date;

    constructor(
        dueDate: Date,
        name: string,
        recurring: boolean = false,
        recurringFrequency: string = null,
        recurringUntil: Date = null
    ) {
        this.uuid = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
        this.dueDate = dueDate;
        this.name = name;
        this.recurring = recurring;
        this.recurringFrequency = recurringFrequency;
        this.recurringUntil = recurringUntil;
    }
}
