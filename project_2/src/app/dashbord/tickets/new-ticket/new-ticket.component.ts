import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControllComponent } from '../../../shared/controll/controll.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControllComponent, FormsModule],
})
export class NewTicketComponent {
  // @ViewChild('formRef') private form?: ElementRef<HTMLFormElement>; // === (Referance) but in another way.
  private form = viewChild.required<ElementRef<HTMLFormElement>>('formRef');

  onsubmit(title: string, ticketText: string) {
    console.log(title);
    console.log(ticketText);

    // this.form?.nativeElement.reset();
    this.form()?.nativeElement.reset();
  }
}
