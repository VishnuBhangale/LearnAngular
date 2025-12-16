import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { Header } from './header/header';
import { User } from './user/user';
import { FormsModule } from '@angular/forms';
import { sharedModule } from './shared/shared.module';
import { Tasks } from './tasks/tasks';
import { tasksModule } from './tasks/task.module';
@NgModule({
  declarations: [App,
    Header,
    User,  
    ],
  bootstrap: [App],
  imports: [BrowserModule,sharedModule,tasksModule], 
  exports: [],

})
export class AapModule {

}