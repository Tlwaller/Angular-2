import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'learn-angular';
  userInput = '';

  handleInput(e) {
    this.userInput = e.target.value;
    console.log(this.userInput);
  }
}
