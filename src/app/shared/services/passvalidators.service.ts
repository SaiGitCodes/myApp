import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassvalidatorsService {
  passwordGroup: any;

  constructor() { }
  validateAreEqual(form: any) {
    if (form.value.confirmPassword && form.value.newPassword) {
      return form.value.confirmPassword === form.value.newPassword ?
        null : form.get('confirmPassword').setErrors({ mismatch: true });
    }
    return null;
  }
}
