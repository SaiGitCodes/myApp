import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // imgsrc="../assets/homeimg.jpg";

  constructor(@Inject(MAT_DIALOG_DATA) public datass: any) { }
  ngOnInit() {
    //   this.commonService.sumTwoNumbers(1, 2);
  }
}
