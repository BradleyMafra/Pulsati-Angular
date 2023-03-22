import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterfacePokemon } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<InterfacePokemon>('https://pokeapi.co/api/v2/pokemon?limit=200');
  }

  getPokemonNome(nome: string) {
    return this.http.get<InterfacePokemon>('https://pokeapi.co/api/v2/pokemon/' + nome);
  }
}
