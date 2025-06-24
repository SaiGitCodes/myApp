import { Component, OnInit, OnDestroy, OnChanges, Input, AfterViewInit, ViewChild, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {
  interval: any = null;
  // @Input() sentname: any;
  // @Input() name!: string;
  name = "";
  @ViewChild(ChildComponent, { static: false }) viewchild!: ChildComponent;
  constructor() {
    console.log("Parent Constructor");
  }
  ngOnChanges(changes: any) {
    console.log("Parent Onchanges");
  }

  ngDoCheck() {
    console.log("Parent ngDoCheck");
  }
  ngOnInit() {
    console.log("Parent ngOnInit", this.viewchild);
    // this.interval=setInterval(() =>{
    //   console.log("setInterval");
    // },1000);
  }
  ngAfterContentInit() {
    console.log("Parent ngAfterContentInit");
  }
  ngAfterContentChecked() {
    console.log("Parent ngAfterContentChecked");
  }
  ngAfterViewInit() {
    console.log("Parent ngAfterViewInit", this.viewchild);
    setTimeout(() => {
      this.viewchild.title = "Apple";
    }, 3000);
  }
  ngAfterViewChecked(): void {
    console.log("Parent ngAfterViewChecked");
  }
  ngOnDestroy() {
    console.log("Parent ngOnDestroy");
    // clearInterval(this.interval);
  }
}
// function omnput() {
//   throw new Error('Function not implemented.');
// }

