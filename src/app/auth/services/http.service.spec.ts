import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttprouteService } from './httproute.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

class MockHttprouteService {
  getMethod() {
    return of({})
  }
  postMethod() {
    return of({})
  }
  getjsonData() {
    return of({})
  }
}

fdescribe('HttpService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: HttprouteService, useClass: MockHttprouteService }
      ],
      imports: [BrowserAnimationsModule, HttpClientModule]
    });
    service = TestBed.inject(HttpService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('call for getPost', () => {
    service.getPost();
    expect(service.getPost).toBeDefined();
  });

  test('call for getDesignation', () => {
    service.getDesignation();
    expect(service.getDesignation).toBeDefined();
  });

  test('call for getRole', () => {
    service.getRole();
    expect(service.getRole).toBeDefined();
  });

  test('call for createEmployee', () => {
    service.createEmployee([{}]);
    expect(service.createEmployee).toBeDefined();
  });

  test('call for getEmployees', () => {
    service.getEmployees();
    expect(service.getEmployees).toBeDefined();
  });

  test('call for deleteEmployee', () => {
    service.deleteEmployee([{}]);
    expect(service.deleteEmployee).toBeDefined();
  });

  test('call for getEmployeeFormFill', () => {
    service.getEmployeeFormFill([{}]);
    expect(service.getEmployeeFormFill).toBeDefined();
  });

  test('call for updateEmployee', () => {
    service.updateEmployee([{}]);
    expect(service.updateEmployee).toBeDefined();
  });

  test('call for postRole', () => {
    service.postRole([{}]);
    expect(service.postRole).toBeDefined();
  });

  test('call for deleteRole', () => {
    service.deleteRole([{}]);
    expect(service.deleteRole).toBeDefined();
  });

  test('call for updateRole', () => {
    service.updateRole([{}]);
    expect(service.updateRole).toBeDefined();
  });

  test('call for updateRoleget', () => {
    service.updateRoleget([{}]);
    expect(service.updateRoleget).toBeDefined();
  });

});
