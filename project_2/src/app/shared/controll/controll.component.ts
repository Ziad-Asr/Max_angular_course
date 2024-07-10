import {
  AfterContentInit,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-controll',
  standalone: true,
  imports: [],
  templateUrl: './controll.component.html',
  styleUrl: './controll.component.css',
  encapsulation: ViewEncapsulation.None, // To pass styles when using the (ng-content) {not get encasulated here only}
  host: {
    class: 'controll',
    '(click)': 'onClick()',
  }, // Use to put style of the class (control) in a wrapper div around theis reusable componenet.
})
export class ControllComponent implements AfterContentInit {
  // @HostBinding('class') className = 'controll'; // Insted of (host)
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }

  private element = inject(ElementRef); // Get access to the component host html

  // @ContentChild('input') private control?: ElementRef<
  //   HTMLFormElement | HTMLTextAreaElement
  // >;
  private control =
    contentChild<ElementRef<HTMLFormElement | HTMLTextAreaElement>>('input');

  ngAfterContentInit(): void {
    console.log('AfetContentInit');
    console.log(this.control()); // Get loaded
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.element);

    // console.log(this.control);
    console.log(this.control());
  }

  label = input.required<string>();
}
