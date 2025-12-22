import { Component } from '@angular/core';
import { Header } from './header/header';
import { ServerStatus } from './dashboard/server-status/server-status';
import { Traffic } from './dashboard/traffic/traffic';
import { Tickets } from './dashboard/tickets/tickets';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [Header, ServerStatus, Traffic, Tickets,DashboardItemComponent],
})
export class AppComponent {
  
 
}
