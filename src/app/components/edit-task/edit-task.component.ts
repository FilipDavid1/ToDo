import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/classes/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getExercise();
  }

  loading: boolean = false;

  id: number;
  task: Task = new Task('', '', '', false);

  getExercise(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getTask(id).subscribe(response => {
      this.task = response;
      this.id = response.id;
      console.log(response);
      
    });
  }

  onSubmit(){
    this.loading = true;
    this.taskService.updateTask(this.task).subscribe(response => {
      console.log(this.task);
      
      this.loading = false;
    });
  }

}
