import { Component } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent {
  searchTerm: string;
  name!: string;
  results = [
    { id: 1, summary: "These are the results for the searched text" },
    { id: 2, summary: "Here are some more results you searched for" },
    { id: 2, summary: "Searching for answers, Are we?" },
    { id: 2, summary: "What more could you ask for?" }
  ]

  users = [
    { name: 'aaa', gender: 'F' },
    { name: 'bbb', gender: 'F' },
    { name: 'ccc', gender: 'F' },
    { name: 'ddd', gender: 'M' }
  ]

  updateSearch(e: any) {
    this.searchTerm = e.target.value;
    console.log("searchTerm ", this.searchTerm);
  }

  // Add() {
  //   this.users.push({ name: this.name, gender: 'F' });
  //   console.log('users :', this.users);
  // }

  Add() {
    this.users = [...this.users, { name: this.name, gender: 'F' }];
    // console.log('users :', this.users);
  }


}
