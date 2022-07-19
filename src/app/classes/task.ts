export class Task {
    id: number;
    title: string;
    description: string;
    deadlineDate: any;
    deadlineTime: any;
    isDone: boolean;


    constructor(title: string, description: string, deadlineDate: any, deadlineTime: any, isDone: boolean) {
        this.title = title;
        this.description = description;
        this.deadlineDate = deadlineDate;
        this.deadlineTime = deadlineTime;
        this.isDone = isDone;
    }
}
