import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormModel, DynamicFormService } from "@ng-dynamic-forms/core";
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

import { MY_FORM_MODEL } from './agregar.constants';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  formModel: DynamicFormModel = MY_FORM_MODEL;
  formGroup = this.formService.createFormGroup(this.formModel);
  heroe: Heroe = {
    alter_ego: '',
    superhero: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.MarvelComics,
    alt_img: ''
  };

  publishers = [
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }, {
      id: 'DC Comics',
      desc: 'DC - Comics'
    }
  ]

  constructor(
    private formService: DynamicFormService,
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.heroesService.getHeroeById(id))
        )
        .subscribe(heroe => {
          this.heroe = heroe
        });
    }
  }

  guardar() {
    console.log(this.heroe);

    if (this.heroe.superhero.trim() === '') {
      return;
    }

    if (this.heroe.id) {
      // Editanto
      this.heroesService.editarHeroe(this.heroe).subscribe(
        res => {
          this.mostrarSnackbar('Heroe actualizado');
        }
      );
    } else {
      // Agregrando uno nuevo 
      this.heroesService.agregarHeroe(this.heroe).subscribe(
        res => {
          this.mostrarSnackbar('Heroe actualizado correctamente');
          this.router.navigate(['/heroes/editar', res.id]);
        }
      );
    }
  }

  mostrarSnackbar(mensaje: string) {
    this.snackBar.open(mensaje, 'ok!!!', {
      duration: 3000
    })
  }

  eliminar(id: string) {
    const dialogRef = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.heroe,
    });

    dialogRef.afterClosed().subscribe(
      value => {
        if (value) {
          this.heroesService.eliminarHeroe(id).subscribe(
            () => { this.router.navigate(['/heroes']); }
          );
        }
      }
    );

  }
}
