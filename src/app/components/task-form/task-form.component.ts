import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }
  loading: boolean = false;

  correctDate = new Date().toLocaleString().split(',')[0]

  task: Task = new Task('', '', this.correctDate, false);

  onSubmit() {
    this.loading = true;
    this.taskService.createTask(this.task).subscribe(
      data => {
        this.loading = false;
      }
    );
  }

}
