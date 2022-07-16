import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


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
}
