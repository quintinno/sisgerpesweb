import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  public pessoaList: any[] = [];

  public pessoaPaginationList: any[] = [];

  public quantidadePorPagina: number = 6;

  public selectedPage = 1;

  constructor (
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {
    this.recuperarPessoa();
    this.configurarPaginacao();
  }

  private configurarPaginacao() {
    let pageIndex = (this.selectedPage - 1) * this.quantidadePorPagina;
    this.pessoaPaginationList = this.pessoaList.slice(pageIndex, this.quantidadePorPagina);
  }

  public recuperarPessoa() {
    return this.pessoaService.recuperarPessoa().subscribe( response => {
      this.pessoaList = response;
    });
  }

  public changePagina(event: Event) {
    const newSize = (event.target as HTMLInputElement).value;
    this.quantidadePorPagina = Number(newSize);
    this.mudarPagina(1);
  }

  public get pageNumber() : number[] {
    return Array(Math.ceil(this.pessoaList.length / this.quantidadePorPagina)).fill(0).map( (x, i) => i + 1 );
  }

  public mudarPagina(page: any) { 
    this.selectedPage = page;
    this.sliceList();
  }

  public sliceList() {
    let pageIndex = (this.selectedPage - 1) * this.quantidadePorPagina;
    let endIndex = (this.selectedPage - 1) * this.quantidadePorPagina + this.quantidadePorPagina;
    this.pessoaPaginationList = [];
    this.pessoaPaginationList = this.pessoaList.slice(pageIndex, endIndex);
  }

}
