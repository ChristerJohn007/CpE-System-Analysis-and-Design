import { Component, OnInit } from '@angular/core';

//Services
import { AppointmentService } from '../shared/appointment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) { }
  appointmentArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() {
    this.appointmentService.getAppointments().subscribe(
        list => {
            this.appointmentArray = list.map(item => {
                return {
                    $key: item.key,
                    ...item.payload.val()
                }
            })
        }
    );
  }

  onDelete($key) {
    if (confirm('Do you want to delete this Appointment record?')) {
      this.appointmentService.deleteAppointment($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(appointment) {
    return appointment.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
