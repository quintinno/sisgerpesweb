import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaCadastrarComponent } from './page/pessoa/pessoa-cadastrar/pessoa-cadastrar.component';
import { PessoaDetalharComponent } from './page/pessoa/pessoa-detalhar/pessoa-detalhar.component';
import { PessoaComponent } from './page/pessoa/pessoa.component';
import { PrincipalComponent } from './page/principal/principal.component';
import { PessoaEditarComponent } from './page/pessoa/pessoa-editar/pessoa-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    PessoaComponent,
    PessoaCadastrarComponent,
    PessoaDetalharComponent,
    PessoaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
