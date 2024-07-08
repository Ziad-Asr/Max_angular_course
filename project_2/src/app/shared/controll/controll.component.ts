import { Component, input } from '@angular/core';

@Component({
  selector: 'app-controll',
  standalone: true,
  imports: [],
  templateUrl: './controll.component.html',
  styleUrl: './controll.component.css',
})
export class ControllComponent {
  label = input.required<string>();
}
