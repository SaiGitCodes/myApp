import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttprouteService } from './httproute.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private httproute: HttprouteService) { }

  getPost() {
    return this.httproute.getMethod('posts');
  }

  getDesignation() {
    return this.httproute.getMethod('getDesignation');
  }

  getRole() {
    return this.httproute.getMethod('getRole');
  }

  createEmployee(data: any) {
    return this.httproute.postMethod('createEmployee', data);
  }

  getEmployees() {
    return this.httproute.getMethod('getEmployees');
  }

  deleteEmployee(data: any) {
    return this.httproute.postMethod('deleteEmployee', data);
  }

  getEmployeeFormFill(data: any) {
    return this.httproute.postMethod('getEmployeeFormFill', data);
  }

  updateEmployee(data: any) {
    return this.httproute.postMethod('updateEmployee', data);
  }

  postRole(data: any) {
    return this.httproute.postMethod('postRole', data);
  }

  deleteRole(data: any) {
    return this.httproute.postMethod('deleteRole', data);
  }

  updateRoleget(data: any) {
    return this.httproute.postMethod('updateRoleget', data);
  }

  updateRole(data: any) {
    return this.httproute.postMethod('updateRole', data);
  }
}
