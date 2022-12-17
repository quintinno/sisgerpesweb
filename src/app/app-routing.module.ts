import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCadastrarComponent } from './page/pessoa/pessoa-cadastrar/pessoa-cadastrar.component';
import { PrincipalComponent } from './page/principal/principal.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "pessoa-cadastrar" },
  { path: "principal", component: PrincipalComponent },
  { path: "pessoa-cadastrar", component: PessoaCadastrarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
