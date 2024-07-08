import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControllComponent } from '../../../shared/controll/controll.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControllComponent],
})
export class NewTicketComponent {}
