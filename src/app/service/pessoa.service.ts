import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API } from "src/api";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor (
    private httpClient: HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  public recuperarTipoPessoa() : Observable<any[]> {
    return this.httpClient.get<any[]>(API.base.concat(API.endpoint_tipo_pessoa)).pipe(catchError(this.handleError));
  }

  public cadastrarPessoa(pessoaModel: any) : Observable<any> {
    return this.httpClient.post(API.base.concat(API.endpoint_pessoa), pessoaModel).pipe(catchError(this.handleError));
  }

  public handleError(httpErrorResponse: HttpErrorResponse) {
    let errorMessage = '';
    if (httpErrorResponse.error instanceof ErrorEvent) {
      errorMessage = httpErrorResponse.error.message;
    } else {
      errorMessage = `${httpErrorResponse.message}`;
    }
    return throwError(errorMessage);
  };

}
