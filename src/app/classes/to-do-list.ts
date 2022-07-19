import { Task } from "./task";

export class ToDoList {
    id: number;
    name: string;
    tasks: Task[];

    constructor(name: string, tasks: Task[]) {
        this.name = name;
        this.tasks = tasks;
    }
}
