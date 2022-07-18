import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Task } from '../classes/task';

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

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>('https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos', task, this.httpOptions).pipe(
      catchError(this.handleError<Task>('createTask'))
    );
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos');
  }

  getTask(id: number): Observable<Task> {
    return this.http.get<Task>(`https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos/${id}`);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos/${id}`, this.httpOptions);
  }

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos/${task.id}`, task, this.httpOptions);
  }

}
