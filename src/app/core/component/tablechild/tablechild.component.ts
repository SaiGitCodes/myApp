import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablechild',
  templateUrl: './tablechild.component.html',
  styleUrls: ['./tablechild.component.scss']
})
export class TablechildComponent implements OnInit {
  @Input() title!: string;
  @Input() description!: string;
  @Input() actionArray!: any[];
  @Output() actionEmit = new EventEmitter<any>();

  ngOnInit(): void {
    console.log('title ', this.title);
    console.log('description ', this.description);
    console.log('actionArray ', this.actionArray);
  }
  onActionEmit(event: any) {
    console.log('onActionEmit ', event);
    this.actionEmit.emit(event);
    // console.log('event value ', event.value);
  }

}
