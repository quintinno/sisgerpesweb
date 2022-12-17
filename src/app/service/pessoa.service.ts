import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API } from "src/api";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor (
    private httpClient: HttpClient
  ) { }

  public recuperarTipoPessoa() : Observable<any[]> {
    return this.httpClient.get<any[]>(API.base.concat(API.endpoint_tipo_pessoa));
  }

  public cadastrarPessoa(pessoaModel: any) : Observable<any> {
    return this.httpClient.post(API.base.concat(API.endpoint_pessoa), pessoaModel);
  }

}
