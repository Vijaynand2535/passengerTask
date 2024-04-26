import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Ipassenger } from 'src/app/shared/models/passenger.inetrface';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-pass-card',
  templateUrl: './pass-card.component.html',
  styleUrls: ['./pass-card.component.scss']
})
export class PassCardComponent implements OnInit {
@Input() passobj !: Ipassenger
@Output() emitter : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>()
isPasssCard : boolean = false
  constructor(private _service : PassengerService) { }

  ngOnInit(): void {
  }
  onEdit(){
  this.isPasssCard = true 
  }
  onDone(updatename : string){
   this.isPasssCard = false
   this._service.updatepassname(this.passobj.id,updatename)
  }
  onDelete(){
 this._service.remove(this.passobj.id)
 this.emitter.emit(this.passobj)
  }



}
