import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../../services/passenger.service';
import { Ipassenger } from '../../models/passenger.inetrface';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {

  constructor(private _passengerv: PassengerService) { }
 passengerArr !: Ipassenger[]
 checkIn !: number
  ngOnInit(): void {
    this.passengerArr = this._passengerv.fetchdata()
    this.check()
  }
  check(){
    this.checkIn = this.passengerArr.filter(ave => ave.checkedIn).length
  }
  onDelete(obj : Ipassenger){
   this.check()
  }

}
