import { Component } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent {
  view = true;
  name = 'Kind';
  value = 'Sai Janani';
  isSpecial = true;
  details = {
    name: 'aaa', age: '5'
  };
  today = new Date();
  color = false;
  onclick() {
    this.view = !this.view;
    this.isSpecial = !this.isSpecial;
  }
  currentStyles = {
    'font-style': true ? 'italic' : 'normal',
    'font-weight': false ? 'bold' : 'normal',
    'font-size': true ? '24px' : '12px'
  }
}
