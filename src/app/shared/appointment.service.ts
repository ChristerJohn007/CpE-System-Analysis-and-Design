import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private firebase: AngularFireDatabase) { }
  appointmentList: AngularFireList<any>;

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

  getAppointments() {
    this.appointmentList = this.firebase.list('appointments');
    return this.appointmentList.snapshotChanges();
  }

  insertAppointment(appointment) {
    this.appointmentList.push({
      fullName: appointment.fullName,
      email: appointment.email,
      mobile: appointment.mobile,
      month: appointment.month,
      day: appointment.day,
      year: appointment.year,
      time: appointment.time,
      procedure: appointment.procedure
    });
  }
}
