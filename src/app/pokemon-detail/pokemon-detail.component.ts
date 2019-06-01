import { map } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
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
export class PokemonDetailComponent implements OnInit {

  @Input() pokemonId: number;

  pokemonName: string;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  getPokemonSpecies() {
    this.pokemonService.getPokemonSpecies(this.pokemonId).subscribe(species => {
      const name = species.names.find(pname => pname.language.name === 'ja');
      const flavors = species.flavor_text_entries
        .filter(flav => flav.language.name === 'ja')
        .map(flav => {

        });
    });
  }
}
