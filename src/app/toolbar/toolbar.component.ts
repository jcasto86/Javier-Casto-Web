import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  public textPhotoButton: string;

  public textVideoButton: string;

  public textCalculatorButton: string;

  constructor() {
    const myText = ['photo', 'video', 'calculator'];

    this.textPhotoButton = myText[0];

    this.textVideoButton = myText[1];

    this.textCalculatorButton = myText[2];
  }
}
