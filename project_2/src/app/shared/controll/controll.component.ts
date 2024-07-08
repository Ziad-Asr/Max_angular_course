import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-controll',
  standalone: true,
  imports: [],
  templateUrl: './controll.component.html',
  styleUrl: './controll.component.css',
  encapsulation: ViewEncapsulation.None, // To pass styles when using the (ng-content) {not get encasulated here only}
  host: {
    class: 'controll',
  }, // Use to put style of the class (control) in a wrapper div around theis reusable componenet.
})
export class ControllComponent {
  label = input.required<string>();
}
