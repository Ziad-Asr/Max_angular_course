import { Component } from '@angular/core';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
  imports: [TicketComponent],
  host: {
    class: 'tickets',
  },
})
export class TicketsComponent {}
