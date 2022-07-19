import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';
import { TaskService } from 'src/app/services/task.service';
import { MatSelectChange } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { ToDoList } from 'src/app/classes/to-do-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taskLists: ToDoList[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getAllTasks();
  }


  selectedOrder = new FormControl();

  filters = [ 'All', 'Active', 'Done' ];

  getAllTasks() {
    this.taskService.getToDoLists().subscribe(
      data => {
        this.taskLists = data;
      }
    );
  }

  

  

  

}

