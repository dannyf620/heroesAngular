import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.scss']
})
export class ConfirmarComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Heroe,
    private dialogRef: MatDialogRef<ConfirmarComponent>
  ) { }

  ngOnInit(): void {


    console.log(this.data);
  }
  borrar(){
    this.dialogRef.close(true);
  }
  cancelar(){
    this.dialogRef.close();
  }
}
