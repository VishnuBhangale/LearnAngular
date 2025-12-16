import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NewTaskData } from '../task.model';
import { TaskService } from '../task/tasks.service';

@Component({
  selector: 'app-new-task', 
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
  standalone: false
})
export class NewTask {
 @Input() userId!:string; 
@Output() close=new EventEmitter<void>();
@Output() add=new EventEmitter<NewTaskData>();
enteredTitle='';
enteredSummary='';
enteredDate='';
private taskService= inject(TaskService);
onCancel(){
  this.close.emit();
}
onSubmit()
{
  // this.add.emit({
  //   title:this.enteredTitle,
  //   summary:this.enteredSummary,
  //   dueDate:this.enteredDate,
  //   });
  this.taskService.addTask(
    {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    },
    this.userId
  );
  this.close.emit();
}
}
