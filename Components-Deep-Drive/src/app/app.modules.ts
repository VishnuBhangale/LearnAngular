import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Header } from './header/header';
import { ServerStatus } from './dashboard/server-status/server-status';
import { Tickets } from './dashboard/tickets/tickets';
import { Traffic } from './dashboard/traffic/traffic';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    ServerStatus, 
    Tickets, 
    Traffic,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule], 
  exports: [],
})
export class AppModule {

}