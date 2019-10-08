import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  form = new FormGroup({
      $key: new FormControl(null),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      mobile: new FormControl('', [Validators.required, Validators.minLength(11)]),
      month: new FormControl('', Validators.required),
      day: new FormControl('', [Validators.required, Validators.minLength(1),Validators.maxLength(2),Validators.min(1),Validators.max(31)]),
      year: new FormControl('', [Validators.required, Validators.minLength(4),Validators.maxLength(4),Validators.min(1900),Validators.max(2020)]),
      time: new FormControl('', Validators.required),
      procedure: new FormControl('', Validators.required),
  });

  
}
