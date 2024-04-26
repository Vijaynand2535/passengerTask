import { verifyHostBindings } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private _snakbar : MatSnackBar) { }
  opensnakbar(msg : string){
     this._snakbar.open(msg,'close',{duration : 2500,verticalPosition : 'top'})
     
  }
}
