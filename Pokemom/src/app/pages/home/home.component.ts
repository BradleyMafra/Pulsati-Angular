import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { InterfacePokemon } from 'src/app/interfaces/interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  pokemonLista: InterfacePokemon[] = [];
  filtroPokemon: InterfacePokemon[] = [];
  pokemonSelecionado: InterfacePokemon | undefined;
  buscarPokemon: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<{result: InterfacePokemon[]}>('https://pokeapi.co/api/v2/pokemon?limit=200')
      .subscribe((res) => {
        this.pokemonLista = res.result;
        this.filtroPokemon = res.result;
      }
    );
  }

  searchpokemon(): void {
    if(!this.buscarPokemon) {
      this.filtroPokemon = this.pokemonLista;
      return;
    }else{
      this.filtroPokemon = this.pokemonLista.filter((pokemon) => pokemon.nome.includes(this.buscarPokemon));
    }
  }

  selecionarPokemon(pokemon: InterfacePokemon): void {
    this.http.get<InterfacePokemonDetalhes>(pokemon.url)
      .subscribe((res) => {
        const habil = res.habilidades.map(habilidades => ({ habilidades: habilidades.habilidades.name}));
        const types = res.types.map(tipos => ({ tipos: tipos.tipos.name}))
  }
}
