import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-cadastrar',
  templateUrl: './pessoa-cadastrar.component.html',
  styleUrls: ['./pessoa-cadastrar.component.scss']
})
export class PessoaCadastrarComponent implements OnInit {

  public tipoPessoaList: any[] = [];

  public isApresentarMensagemSucesso: boolean = false;

  public isApresentarMensagemErro: boolean = false;

  public mensagemErro: string = "";

  public formBuilderGroup = this.formBuilder.group({
    codigo: [{ value: "", disable: true }],
    tipo: ["", Validators.required ],
    nome: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3), Validators.maxLength(100)] ],
  });

  constructor (
    private formBuilder: FormBuilder,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() { 
    this.recuperarTipoPessoa();
  }

  public recuperarTipoPessoa() {
    return this.pessoaService.recuperarTipoPessoa().subscribe( response => {
      this.tipoPessoaList = response;
    });
  }

  public cadastrarPessoa() {

    const pessoaModel = {
      tipo: { codigo: this.formBuilderGroup.controls["tipo"].value },
      nome: this.formBuilderGroup.controls["nome"].value
    }

    this.pessoaService.cadastrarPessoa(pessoaModel).subscribe( response => {
      this.apresentarMensagemSucesso();
      this.clearFormBuilderGroup();
    }, error => {
      console.log(error);
      this.apresentarMensagemErro(error);
    });

  }

  private apresentarMensagemSucesso() {
    this.isApresentarMensagemSucesso = true;
    setTimeout(() => {
      this.isApresentarMensagemSucesso = false;
    }, 4000);
  }

  private apresentarMensagemErro(mensagem: string) {
    this.mensagemErro = mensagem;
    this.isApresentarMensagemErro = true;
    setTimeout(() => {
      this.isApresentarMensagemErro = false;
    }, 4000);
  }

  private clearFormBuilderGroup() {
    this.formBuilderGroup.reset();
  }

}
