import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



//Service
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
//     emailFormControl = new FormControl('', [
//     Validators.required,
//     Validators.email,
// ]);
//     fullNameFormControl = new FormControl('', [
//     Validators.required,
// ]);




  constructor(private appointmentService: AppointmentService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.appointmentService.form.controls;


  ngOnInit() {
      this.appointmentService.getAppointments();
  }

  onSubmit(){
    this.submitted = true;
    if (this.appointmentService.form.valid) {
        if (this.appointmentService.form.get('$key').value == null)
            this.appointmentService.insertAppointment(this.appointmentService.form.value);
            this.showSuccessMessage = true;
            setTimeout(() => this.showSuccessMessage = false, 3000);
    //insert
        this.submitted = false;
        this.appointmentService.form.reset();
    }
  }

}
