import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp';

  ngOnInit() {}

  constructor() {}

  tasks = [
    {title: 'Task 1', description: 'descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription', isDone: false},
    {title: 'Task 2', description: 'description', isDone: false},
    {title: 'Task 3', description: 'description', isDone: false},
    {title: 'Task 4', description: 'description', isDone: false},
  ];

  selectedValue: string = '';

  filters = [
    {value: 'all-0', viewValue: 'All'},
    {value: 'active-1', viewValue: 'Active'},
    {value: 'completed-2', viewValue: 'Completed'},
  ];

  

  // addTask(task: string) {
  //   this.tasks.push(task);
  // }

  // deleteTask(task: string) {
  //   this.tasks.splice(this.tasks.indexOf(task), 1);
  // }



}


