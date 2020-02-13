import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Change me!';
  public userInput : string = '';

  handleInput(e) {
    this.userInput = e.target.value;
    console.log(this.userInput);
  }

  buttonClick = () => {
    this.title = this.userInput;
  }
}
