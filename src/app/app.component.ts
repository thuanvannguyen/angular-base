import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hello 5000 ae!';
  img_link: string =
    'https://m.yodycdn.com/fit-in/filters:format(webp)/products/ao-thun-thu-dong-dai-tay-yody-atn6024-xla-cvn6064-kem-6.jpg';

  content: string = '<b>Nguyen van A</b>';
  errorCode: number = 404;

  students: Array<any> = [
    {
      name: 'Nguyen van A',
      age: 18,
    },
    {
      name: 'Nguyen van B',
      age: 20,
    },
  ];

  isActive: boolean = true;
  sayHello() {
    this.isActive = !this.isActive;
  }

  /// Form initialization with validation
  loginF: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(16),
    ]),
  });

  // Handle form submission
  onSubmit() {
    if (this.loginF.invalid) return;
    console.log(this.loginF.value);
  }
}
