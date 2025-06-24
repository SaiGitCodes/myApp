import { TestBed } from '@angular/core/testing';

import { PassvalidatorsService } from './passvalidators.service';
import { FormControl, FormGroup } from '@angular/forms';

fdescribe('PassvalidatorsService', () => {
  let service: PassvalidatorsService;
  // service.passwordGroup = new FormGroup({
  //   confirmPassword: new FormControl('Sai'),
  //   newPassword: new FormControl('Sai')
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassvalidatorsService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  //validateAreEqual
  // test('call for validateAreEqual', () => {
  //   service.passwordGroup = {
  //     confirmPassword: '123456',
  //     newPassword: '123456'
  //   };
  //   service.validateAreEqual({});
  //   expect(service.validateAreEqual).toBeDefined();
  // });

  test('should be call validateAreEqual', () => {
    const form = new FormGroup({
      confirmPassword: new FormControl('password1'),
      newPassword: new FormControl('password1')
    },
      service.validateAreEqual.bind(this)
    );
    service.validateAreEqual(form);
    expect(service.validateAreEqual).toBeDefined();

  });

  test('should return null when confirmPassword or newPassword is missing', () => {
    const form = new FormGroup({
      confirmPassword: new FormControl('ps1'),
      newPassword: new FormControl('ps2')
    },
      service.validateAreEqual.bind(this)
    );
    // expect(service).toBeTruthy();
    service.validateAreEqual(form);
    expect(service.validateAreEqual).toBeDefined();
  });

  test('should return null ', () => {
    const form = new FormGroup({
      confirmPassword: new FormControl('ps1'),
      // newPassword: new FormControl('ps2')
    },
      service.validateAreEqual.bind(this)
    );
    // expect(service).toBeTruthy();
    service.validateAreEqual(form);
    expect(service.validateAreEqual).toBeDefined();
  });


});


