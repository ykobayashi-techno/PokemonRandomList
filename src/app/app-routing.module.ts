import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/pokemon', pathMatch: 'full' },
  { path: 'pokemon', component: PokemonListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
