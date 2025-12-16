import { Component,Input,inject } from '@angular/core';
import { taskInterface } from '../task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TaskService } from '../task/tasks.service';

@Component({
  selector: 'app-task', 
  templateUrl: './task.html',
  styleUrl: './task.css',
  standalone: false
})
export class Task {
@Input({required:true}) task!:taskInterface;
private taskService= inject(TaskService);
onCompleteTask(){
  this.taskService.removeTask(this.task.id);
}
}
