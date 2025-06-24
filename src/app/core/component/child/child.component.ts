import { Component, OnChanges, OnInit, DoCheck, OnDestroy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, OnDestroy, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  title!: string;
  @Input() sentname: any;
  constructor() {
    console.log("Child Constructor");
  }
  ngOnChanges() {
    console.log("Child ngOnChanges");
  }
  ngDoCheck() {
    console.log("Child ngDoCheck");
  }
  ngOnInit() {
    console.log("Child ngOnInit");
  }
  ngAfterContentInit() {
    console.log("Child ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("Child ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("Child ngAfterViewInit");
  }
  ngAfterViewChecked() {
    console.log("Child ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("Child ngOnDestroy");
  }
}

