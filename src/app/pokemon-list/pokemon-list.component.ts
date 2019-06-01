import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';

const POKEMON_LAST_ID = 655;

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonIdList: number[];
  pokemonLastId = 807;

  selectedPokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

  getRandomPokemonIds() {
    this.selectedPokemon = null;
    const list = [];
    while (list.length < 10) {
      const id = this.getRandomId();
      if (list.indexOf(id) === -1) {
        list.push(id);
      }
    }
    this.pokemonIdList = list;
  }

  getRandomId() {
    return Math.floor(Math.random() * (POKEMON_LAST_ID - 1) + 1);
  }

  onClickPokemon(pokemon: Pokemon) {
    this.selectedPokemon = pokemon;
  }
}
