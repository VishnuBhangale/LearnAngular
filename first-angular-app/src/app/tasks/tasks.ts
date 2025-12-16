import { Component, Input } from '@angular/core';
import { TaskService } from './task/tasks.service';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  standalone: false
})
export class Tasks {

@Input() userId!:string;
@Input() name!:string;
isAddingTask=false;
// private taskService: TaskService;
// constructor(taskService:TaskService){
//   this.taskService=taskService;
// }
//OR we can use like this
constructor(private taskService: TaskService){  
}
get selectedUser(){
  return this.taskService.getUserTasks(this.userId);
}
onStartAddTask() {
      this.isAddingTask=true;
}
onCloseAddTask() {
      this.isAddingTask=false;
}

}
