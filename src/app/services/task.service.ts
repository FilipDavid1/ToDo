import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../classes/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient,) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>('https://62d16d0dd4eb6c69e7dd3507.mockapi.io/api//toDos', task, this.httpOptions);
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

}
