import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpService } from 'src/app/auth/services/http.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { SnackService } from 'src/app/shared/services/snack.service';
import { snackenum } from '../../models/snack.model';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

export interface PeriodicElement {
  id: number;
  name: string;
}

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: any[];
  displayedColumns: string[] = ['id', 'name', 'Action'];
  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('rolehtml', { static: false }) rolets!: TemplateRef<any>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';


  needUpdate = {
    id: '', name: ''
  }
  update = false;

  // needUpdate: any;

  constructor(private http1: HttpService,
    public dialog: MatDialog,
    private dailogservice: DialogService,
    private authservice: AuthService,
    private snackservice: SnackService) { }

  messages: any;

  ngOnInit() {

    this.authservice.message.subscribe(res => {
      this.messages = res;
    })

    this.http1.getRole().subscribe((res: any) => {
      if (res) {
        console.log('Roleresponse: ', res);
        this.ELEMENT_DATA = res.role;
        console.log('Roledata: ', this.ELEMENT_DATA);
        this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  name = new FormControl(null);
  needUpdateBack: any;

  onAdd() {
    this.update = false;
    this.name.reset();
    const roleRef = this.dialog.open(this.rolets, {
      autoFocus: false,
      width: '400px'
    });
    // roleRef.afterClosed().subscribe((response: any) => {
    //   console.log('roleAdded:', response);
    //   // this.http1.postRole(this.name[response]).subscribe(res => {
    //   this.http1.postRole(response).subscribe(res => {
    //     console.log('roleBack:', res);

    //   })
    // });

  }
  onCreateRole() {
    console.log('this.name', this.name);
    if (this.name.valid) {
      console.log('inside if', this.name.value);
      // if (!this.update) {
      this.http1.postRole({ name: this.name.value }).subscribe((res: any) => {
        console.log('resfromback: ', res.addRole);
        this.ELEMENT_DATA.push({ id: res.addRole.id, name: res.addRole.name });
        this.snackservice.clickmesnack({
          msg: this.messages.DATA_SAVED, content: snackenum.Success,
          horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition
        });
        this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      });
      // }
    }
  }
  //     }
  //   }

  // }

  onDelete(element: any) {
    const dialogRef = this.dailogservice.openConfirmationDialog(this.messages?.DELETE);
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.http1.deleteRole({ id: element.id }).subscribe(res => {
          console.log('deleted: ', res);
          const index = this.ELEMENT_DATA.findIndex(x => x.id == element.id);
          if (index !== -1) {
            this.ELEMENT_DATA.splice(index, 1);
            this.snackservice.clickmesnack({
              msg: this.messages.DATA_DELETE, content: snackenum.Success,
              horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition
            });
            this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
          }
        });
      }
    });
  }


  onEdit(element: any) {
    this.update = true;
    console.log('element', element)
    this.name.setValue(element.name);
    const sh = this.dialog.open(this.rolets);
    sh.afterClosed().subscribe(res => {
      if (res) {
        // console.log('needupdate: ', this.name);
        element.name = this.name.value;
        console.log('this.element', element);
        this.http1.updateRole(element).subscribe(res => {
          console.log(res);
          this.dataSource.paginator = this.paginator;

        })

        // console.log('needUpdateDetails:', element);
        // this.needUpdate = element;
        // console.log('needUpdateDetails2:', this.needUpdate);
      }

    })
  }
}
