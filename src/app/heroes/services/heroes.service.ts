import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById(id:string){
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }
  
  busquedaHeroe(termino:string) {
    const params = {
      q: termino,
      _limit: 4
    }
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes/`, { params });
  }


  agregarHeroe (nuevoHeroe: Heroe) {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, nuevoHeroe);
  }

  editarHeroe (heroe: Heroe) {
    return this.http.put<Heroe[]>(`${this.baseUrl}/heroes/${heroe.id}`, heroe);
  }

  eliminarHeroe (heroeId: string) {
    return this.http.delete<Heroe[]>(`${this.baseUrl}/heroes/${heroeId}`);
  }
}
