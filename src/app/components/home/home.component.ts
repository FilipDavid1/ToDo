import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }


  tasks: Task[];

  selectedValue: string = '';

  filters = [
    {value: 'all-0', viewValue: 'All'},
    {value: 'active-1', viewValue: 'Active'},
    {value: 'completed-2', viewValue: 'Completed'},
  ];

  getAllTasks() {
    this.taskService.getTasks().subscribe(
      data => {
        this.tasks = data;
      }
    );
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(
      data => {
        this.getAllTasks();
      }
    );
  }

  updateTask(task: Task) {
    task.isDone = true;
    this.taskService.updateTask(task).subscribe(
      data => {
        this.getAllTasks();
      }
    );
  }
}
