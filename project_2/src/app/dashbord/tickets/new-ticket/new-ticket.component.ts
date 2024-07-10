import {
  afterNextRender,
  afterRender,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
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
export class NewTicketComponent implements OnInit, AfterViewInit {
  add = output<{ title: string; text: string }>();

  constructor() {
    afterRender(() => {
      console.log('afetrRender');
    }); // Excuted when any thing changes in the app any where. (not like other declarators that run onchange in there components only)

    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  // These loaded after (OnInit) and before (AfterViewInit)
  @ViewChild('formRef') private form?: ElementRef<HTMLFormElement>; // === (Referance) but in another way.
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('formRef');

  ngOnInit(): void {
    console.log('Oninit');
    console.log(this.form?.nativeElement); // Not loaded yet
  } // Run on initialization of it's component only

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log(this.form?.nativeElement); // Loaded yet
  }

  onsubmit(title: string, ticketText: string) {
    this.add.emit({ title: title, text: ticketText });

    // this.form?.nativeElement.reset();
    this.form?.nativeElement.reset();
  }
}
