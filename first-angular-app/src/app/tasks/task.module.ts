import { NgModule } from "@angular/core";
import { Tasks } from "./tasks";
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { sharedModule } from "../shared/shared.module";
import { CommonModule, DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        Tasks,   
        Task,
        NewTask,],
    exports:[Tasks],
    imports:[CommonModule,FormsModule,sharedModule],
  
})
export class tasksModule  {

}