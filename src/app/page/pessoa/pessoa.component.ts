import { Component, OnInit } from '@angular/core';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  public pessoaList: any[] = [];

  constructor (
    private pessoaService: PessoaService
  ) { }

  ngOnInit() { 
    this.recuperarPessoa();
  }

  public recuperarPessoa() {
    return this.pessoaService.recuperarPessoa().subscribe( response => {
      this.pessoaList = response;
      console.log(this.pessoaList);
    });
  }

}
