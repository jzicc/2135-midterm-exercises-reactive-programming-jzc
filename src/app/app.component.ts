import { Component } from '@angular/core';
import { Observable, of, from, filter, range } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numbers$: Observable<number>;
  constructor() {}
}

const numbersRange$ = range(1, 10);

numbersRange$
  .pipe(filter((num) => num % 2 === 0))
  .subscribe((value) => console.log('Even number: ' + value));

const odd = numbersRange$.pipe(filter((num) => num % 2 != 0));

const subscribe$ = odd.subscribe((val) => console.log(`Odd number: ${val}`));

numbersRange$.subscribe((value) => console.log(value * 2 + ' => ' + value * 4));
