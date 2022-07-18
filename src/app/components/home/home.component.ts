import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';
import { TaskService } from 'src/app/services/task.service';
import { MatSelectChange } from '@angular/material/select';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks: Task[] = [];
  doneTasks: Task[] = [];
  activeTasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }


  selectedOrder = new FormControl();

  filters = [ 'All', 'Active', 'Done' ];

  getAllTasks() {
    this.taskService.getTasks().subscribe(
      data => {
        this.tasks = data;
        this.activeTasks = data.filter(task => !task.isDone);
        this.doneTasks = data.filter(task => task.isDone);
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

  dropDownChanged(event: MatSelectChange) {
    
    if (event.value == "All") {
      return this.getAllTasks();
    }
    else if (event.value == "Active") {
      return this.tasks = this.tasks.filter(task => !task.isDone);
    }
    else if (event.value == "Done") {
      return this.tasks = this.tasks.filter(task => task.isDone);
    }
  }
}

