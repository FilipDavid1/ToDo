import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Task } from 'src/app/classes/task';
import { ToDoList } from 'src/app/classes/to-do-list';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-to-do-list-form',
  templateUrl: './to-do-list-form.component.html',
  styleUrls: ['./to-do-list-form.component.css']
})
export class ToDoListFormComponent implements OnInit {

  constructor(private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  loading: boolean = false;

  correctDate = new Date().toLocaleString().split(',')[0]

  task: Task = new Task('', '', this.correctDate, '', false);
  taskList: Task[] = [];
  toDoList: ToDoList = new ToDoList('', this.taskList);

  openTempDialog() {
    const myTempDialog = this.dialog.open(this.dialogRef);
    myTempDialog.afterClosed();
  }

  addTask(task: Task) {
    var t = new Task(task.title, task.description, task.deadlineDate, task.deadlineTime, task.isDone)
        this.taskList.push(t);
        task.title = '';
        task.description = '';
        task.deadlineDate = this.correctDate;
      }

  deleteTask(task: Task) {
    this.taskList.splice(this.taskList.indexOf(task), 1);
  }

  onSubmit() {
    this.loading = true;
    this.taskService.createToDoList(this.toDoList).subscribe(
      data => {
        this.loading = false;
      }
    );
  }
}
