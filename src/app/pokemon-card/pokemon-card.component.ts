import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonId: number;

  pokemon: Pokemon;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonService.getPokemon(this.pokemonId)
      .subscribe(pokemon => {
        this.pokemon = pokemon;
      });
  }

  getPokemonJapaneseName(name) {
    return this.pokemonService.englishToJapanese(name);
  }
}
