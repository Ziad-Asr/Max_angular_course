import { Component } from '@angular/core';
import { TicketComponent } from './ticket/ticket.component';
import { Ticket } from './tickets.model';

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
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };

    // this.tickets.push(ticket);
  }
}
