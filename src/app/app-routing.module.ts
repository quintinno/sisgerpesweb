import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaCadastrarComponent } from './page/pessoa/pessoa-cadastrar/pessoa-cadastrar.component';
import { PessoaDetalharComponent } from './page/pessoa/pessoa-detalhar/pessoa-detalhar.component';
import { PessoaEditarComponent } from './page/pessoa/pessoa-editar/pessoa-editar.component';
import { PessoaComponent } from './page/pessoa/pessoa.component';
import { PrincipalComponent } from './page/principal/principal.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "pessoa-cadastrar" },
  { path: "principal", component: PrincipalComponent },
  { path: "pessoa", component: PessoaComponent },
  { path: "pessoa-cadastrar", component: PessoaCadastrarComponent },
  { path: "pessoa-detalhar", component: PessoaDetalharComponent },
  { path: "pessoa-editar/:codigo", component: PessoaEditarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
