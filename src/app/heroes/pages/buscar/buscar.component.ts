import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  heroeSeleccionado: Heroe | undefined;
  heroes: Heroe[] = [];
  termino: string = '';

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }


  buscar() {
    this.heroesService.busquedaHeroe(this.termino.trim())
      .subscribe(heroes=> this.heroes = heroes)
  }


  elementoSeleccionado(evento: MatAutocompleteSelectedEvent) {
    console.log(evento);
    if(!evento.option.value){
      this.heroeSeleccionado = undefined;
      return;
    }
    const heroe: Heroe = evento.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroeById(heroe.id!)
      .subscribe(heroe => this.heroeSeleccionado = heroe );


  }
}
