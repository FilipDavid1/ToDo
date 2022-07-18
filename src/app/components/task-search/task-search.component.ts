import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { Task } from 'src/app/classes/task';

import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-search',
  templateUrl: './task-search.component.html',
  styleUrls: ['./task-search.component.css']
})
export class TaskSearchComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks$ = this.searchTerms.pipe(

      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.taskService.searchTasks(term)),
    );
  }

  tasks$: Observable<Task[]>;
  private searchTerms = new Subject<string>();

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
