import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/classes/task';


@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  task: Task = new Task('', '', new Date(), false);

  onSubmit() {}

}
