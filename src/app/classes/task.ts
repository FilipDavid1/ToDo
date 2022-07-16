export class Task {
    id: number;
    title: string;
    description: string;
    deadline: Date;
    isDone: boolean;


    constructor(title: string, description: string, deadline: Date, isDone: boolean) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.isDone = isDone;
    }
}
