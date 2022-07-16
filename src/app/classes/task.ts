export class Task {
    id: number;
    title: string;
    description: string;
    deadline: any;
    isDone: boolean;


    constructor(title: string, description: string, deadline: any, isDone: boolean) {
        this.title = title;
        this.description = description;
        this.deadline = deadline;
        this.isDone = isDone;
    }
}
