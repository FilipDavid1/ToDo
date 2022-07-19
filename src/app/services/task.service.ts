import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Task } from '../classes/task';
import { ToDoList } from '../classes/to-do-list';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient,) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }

  createToDoList(toDoList: ToDoList): Observable<ToDoList> {
    return this.http.post<ToDoList>('https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos', toDoList, this.httpOptions);
  }

  getToDoList(id: number): Observable<ToDoList> {
    return this.http.get<ToDoList>(`https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos/${id}`);
  }




  getToDoLists(): Observable<ToDoList[]> {
    return this.http.get<ToDoList[]>('https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos');
  }

  getTask(name: string): Observable<Task> {
    return this.http.get<Task>(`https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos/${name}`);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos/${id}`, this.httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos/${task.id}`, task, this.httpOptions);
  }

  searchTasks(term: string): Observable<Task[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Task[]>(`https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos/?title=${term}`).pipe(
      catchError(this.handleError<Task[]>('searchTasks', []))
    );
  }

}
