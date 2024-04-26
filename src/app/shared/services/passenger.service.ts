import { Injectable } from '@angular/core';
import { Ipassenger } from '../models/passenger.inetrface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private _service : SnackbarService) { }

  passArr: Ipassenger[] = [
    {
      id: 1,
      fullname: 'Rajiv Gandhi',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'Soniya Gandhi',
      checkedIn: false,
      checkInDate: null,
      children: [
        { name: 'Ted', age: 12 },
        { name: 'Chloe', age: 7 },
      ],
    },
    {
      id: 3,
      fullname: 'Rahul Gandhi',
      checkedIn: true,
      checkInDate: 1491606000000,
      children: null,
    },
    {
      id: 4,
      fullname: 'Priynka Gandhi',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Jessica', age: 1 }],
    },
    {
      id: 5,
      fullname: 'Robert Vadra',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
  ];
  fetchdata(){
  return  this.passArr
  }
  updatepassname(id : number , updatename : string){
    for(let i= 0 ; i < this.passArr.length ; i++){
      if(this.passArr[i].id === id){
          let getname = this.passArr[i].fullname
          this.passArr[i].fullname = updatename
          this._service.opensnakbar(`the passenger ${getname}is changed to ${updatename}`)
      }
    }
  }
  remove(id : number){
  let getindex = this.passArr.findIndex(pass => pass.id === id)
  let getname = this.passArr[getindex].fullname
  this.passArr.splice(getindex,1)
  this._service.opensnakbar(`the passenger ${getname} is removed`)
  }
}
