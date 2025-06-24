import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  // constructor(@Inject(MAT_DIALOG_DATA) public datass: any,
  //   private commonService: CommonService) { }
  // @ViewChild('true', { static: false }) heretrue!: TemplateRef<any>;
  checked: Boolean = false;
  // unchecked: Boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) public datass: any) { }

  ngOnInit() {
    //   this.commonService.sumTwoNumbers(1, 2);
  }
  onYes() {
    if (this.checked) {
      console.log('Checked');
    }
    else {
      console.log('Unchecked')
    }
  }

}
