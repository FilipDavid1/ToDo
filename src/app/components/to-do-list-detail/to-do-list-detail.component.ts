import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/classes/task';
import { ToDoList } from 'src/app/classes/to-do-list';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-to-do-list-detail',
  templateUrl: './to-do-list-detail.component.html',
  styleUrls: ['./to-do-list-detail.component.css']
})
export class ToDoListDetailComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getToDoList();
  }

  id: number;
  toDoList: ToDoList = new ToDoList('', []);

  allTaskList: Task[] = [];
  doneTaskList: Task[] = [];
  activeTaskList: Task[] = [];
  

  getToDoList() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getToDoList(id).subscribe(response => {
      this.toDoList = response;
      this.allTaskList = response.tasks;
      this.activeTaskList = this.allTaskList.filter(task => !task.isDone);
      this.doneTaskList = this.allTaskList.filter(task => task.isDone);
      this.id = response.id;      
    });
  }

  updateTask(task: Task) {
    task.isDone = true;
    this.taskService.updateTask(task).subscribe(response => {
      this.getToDoList();
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(
      data => {
        this.getToDoList();
      }
    );
  }
}
