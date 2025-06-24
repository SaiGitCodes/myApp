import { AfterViewInit, Component, Inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogRef } from '@angular/cdk/dialog';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { SnackService } from 'src/app/shared/services/snack.service';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HttpService } from 'src/app/auth/services/http.service';
import { snackenum } from '../../models/snack.model';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



export interface PeriodicElement {
  id: number;
  name: string;
  department: string;
  designation: string;
  officeLocation: string;
  status: string;
}

@Component({
  selector: 'app-extable',
  templateUrl: './extable.component.html',
  styleUrls: ['./extable.component.scss']
})
export class ExtableComponent implements OnInit, AfterViewInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  ELEMENT_DATA: any[];
  // ELEMENT_DATA: PeriodicElement[] = [
  //   { id: 2, name: 'hhh', department: 'Development', designation: 'Software Engineer', officeLocation: 'tvl', status: 'active' },
  //   { id: 1, name: 'fff', department: 'Development', designation: 'Software Engineer', officeLocation: 'tvl', status: 'active' },
  //   { id: 3, name: 'iii', department: 'Development', designation: 'Software Engineer', officeLocation: 'tvl', status: 'active' },
  //   { id: 4, name: 'ddd', department: 'Development', designation: 'Software Engineer', officeLocation: 'tvl', status: 'active' },
  //   { id: 5, name: 'mmm', department: 'Development', designation: 'Software Engineer', officeLocation: 'tvl', status: 'active' },
  //   { id: 6, name: 'aaa', department: 'Development', designation: 'Software Engineer', officeLocation: 'tvl', status: 'active' },
  //   { id: 7, name: 'kkk', department: 'Development', designation: 'Software Engineer', officeLocation: 'tvl', status: 'active' },
  //   { id: 8, name: 'bbb', department: 'Development', designation: 'Software Engineer', officeLocation: 'tvl', status: 'active' },
  //   { id: 9, name: 'ccc', department: 'Development', designation: 'Software Engineer', officeLocation: 'tvl', status: 'active' },
  //   { id: 10, name: 'jjj', department: 'Development', designation: 'Software Engineer', officeLocation: 'tvl', status: 'active' },
  //   { id: 11, name: 'ggg', department: 'Development', designation: 'Software Engineer', officeLocation: 'tvl', status: 'active' },
  //   { id: 12, name: 'lll', department: 'Accounting and Finance', designation: 'Auditor', officeLocation: 'tvl', status: 'inactive' },
  //   { id: 13, name: 'eee', department: 'Sales and Service', designation: 'Customer Support', officeLocation: 'tvl', status: 'inactive' }

  // ];
  // displayedColumns: string[] = ['id', 'name', 'department', 'designation', 'officeLocation', 'status', 'Action'];
  displayedColumns: string[] = ['id', 'roleId', 'designationId', 'firstName', 'lastName', 'email', 'Action'];
  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild('delete', { static: false }) delete!: TemplateRef<any>;

  title = 'Abstract';
  description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.';
  actionArray = [{ label: 'Active Employees', value: 'active' },
  { label: 'Inactive Employees', value: 'inactive' }];
  filterValue: any[] | undefined;
  checked: boolean = false;

  constructor(
    // private opendialog: MatDialog,
    // private dialogService: DialogService,
    // @Inject(MAT_DIALOG_DATA) public datass: any) { }
    private opendialog: MatDialog,
    private dialogService: DialogService,
    private snackservice: SnackService,
    private authservice: AuthService,
    private httpservice: HttpService,
    private router: Router) { }

  messages: any;
  ngOnInit(): any {
    console.log('ngonint inside');
    this.authservice.message.subscribe(res => this.messages = res);

    this.httpservice.getEmployees().subscribe((res: any) => {
      if (res) {
        console.log('response get', res);
        this.ELEMENT_DATA = res.response;
        this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
        console.log('datasource', this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })

  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    console.log("event", event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onEmit(event: any) {
    // console.log('onEmit ', event);
    // const filterValue = this.ELEMENT_DATA.filter(item => item.status === event.value);
    // this.dataSource = new MatTableDataSource<any>(filterValue);
    // this.dataSource.paginator = this.paginator;
  }

  double: boolean = false;
  onDelete(element: any) {
    console.log('element ', element);
    const dialogRef = this.dialogService.openConfirmationDialog(this.messages.DELETE);
    console.log('dialogRef:', dialogRef);

    dialogRef.afterClosed().subscribe(response => {
      console.log('dialogReturns');
      console.log('response: ', response);
      if (response) {

        this.httpservice.deleteEmployee({ id: element.id }).subscribe(res => {
          if (res) {
            console.log('delete ', res);
            const index = this.ELEMENT_DATA.findIndex(x => x.id == element.id);
            if (index !== -1) {
              this.ELEMENT_DATA.splice(index, 1);
              this.snackservice.clickmesnack({
                msg: this.messages.DATA_DELETE, content: snackenum.Success,
                horizontalPosition: this.horizontalPosition, verticalPosition: this.verticalPosition
              });
              this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
              this.dataSource.paginator = this.paginator;
            }
          }
        })
      }
    });
  }

  onEdit(element: any) {
    console.log('edit: ', element);
    this.router.navigate(['/app/FAQs', 'edit', element.id]);
  }


}
