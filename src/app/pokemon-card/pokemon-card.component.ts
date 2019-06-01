import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon';
import { Component, OnInit, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit, OnChanges {

  @Input() pokemonId: number;

  @Input() activePokemon: Pokemon;

  // Output()デコレータを付けてEventを定義
  @Output() clickPokemonEvent: EventEmitter<Pokemon> = new EventEmitter<Pokemon>();

  pokemon: Pokemon;
  isImageLoaded: boolean;

  isSelected: boolean;

  constructor(private pokemonService: PokemonService) {
    this.isImageLoaded = false;
  }

  ngOnInit() {
    this.getPokemon();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (!changes.hasOwnProperty(propName)) { continue; }

      if (this.pokemon && propName === 'activePokemon') {
        this.isSelected = this.pokemon === this.activePokemon;
      }
    }
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

  // 子コンポーネントからイベントの発火
  dispatchClickPokemon() {
    this.clickPokemonEvent.emit(this.pokemon);
  }

  onLoad() {
    this.isImageLoaded = true;
    console.log('onLoad');
  }
}
