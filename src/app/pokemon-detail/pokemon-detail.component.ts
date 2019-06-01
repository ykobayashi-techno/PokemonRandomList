import { map } from 'rxjs/operators';
import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { PokemonService } from './../pokemon.service';

export interface FlavorTextInterface {
  text: string;
  version: string;
}

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit, OnChanges {

  @Input() pokemonId: number;

  pokemonName: string;
  flavors: FlavorTextInterface[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPokemonSpecies();
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const prop in changes) {
      if (!changes.hasOwnProperty(prop)) { continue; }

      if (prop === 'pokemonId' && this.pokemonId && this.pokemonId > 0) {
        this.getPokemonSpecies();
      }
    }
  }

  getPokemonSpecies() {
    this.pokemonName = '';
    this.flavors = [];
    this.pokemonService.getPokemonSpecies(this.pokemonId).subscribe(species => {
      this.pokemonName = species.names.find(pname => pname.language.name === 'ja').name;
      species.flavor_text_entries
        .filter(flav => flav.language.name === 'ja')
        .map(flav => {
          const obj: FlavorTextInterface = {
            text: flav.flavor_text,
            version: flav.version.name
          };

          this.flavors.push(obj);
        });
    });
  }
}
