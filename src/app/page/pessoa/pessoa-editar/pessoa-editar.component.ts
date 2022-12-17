import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from 'src/app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.scss']
})
export class PessoaEditarComponent implements OnInit {

  public pessoaModel: any;

  public tipoPessoaList: any[] = [];

  public isApresentarMensagemSucesso: boolean = false;

  public isApresentarMensagemErro: boolean = false;

  public codigoPessoa: any;

  public mensagemErro: string = "Erro ao tentar recuperar os dados da API!";

  public formBuilderGroup = this.formBuilder.group({
    codigo: [{ value: "", disable: true }],
    tipo: ["", Validators.required ],
    nome: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3), Validators.maxLength(100)] ],
  });

  constructor (
    private activatedRoute: ActivatedRoute,
    private pessoaService: PessoaService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.codigoPessoa = this.activatedRoute.snapshot.params.codigo;
  }

  ngOnInit(): void {
    this.recuperarCodigoPessoa();
    this.recuperarTipoPessoa();
    this.formBuilderGroup.controls['codigo'].setValue(this.codigoPessoa);
  }

  public recuperarTipoPessoa() {
    return this.pessoaService.recuperarTipoPessoa().subscribe( response => {
      this.tipoPessoaList = response;
    });
  }

  public recuperarCodigoPessoa() {
    this.pessoaService.pesquisarPessoa(this.codigoPessoa).subscribe( response => {
      this.pessoaModel = response;
      this.formBuilderGroup.controls['tipo'].setValue(response.tipo.codigo);
      this.formBuilderGroup.controls['nome'].setValue(response.nome);
    }, error => {
      this.apresentarMensagemErro(error.mensagem);
    });
  }

  public cadastrarPessoa() {

    const pessoaModel = {
      codigo: this.formBuilderGroup.controls["codigo"].value,
      tipo: { codigo: this.formBuilderGroup.controls["tipo"].value },
      nome: this.formBuilderGroup.controls["nome"].value
    }

    this.pessoaService.cadastrarPessoa(pessoaModel).subscribe( response => {
      this.apresentarMensagemSucesso();
      this.clearFormBuilderGroup();
      this.redirionarTelaPessoa();
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
    this.isApresentarMensagemErro = true;
    setTimeout(() => {
      this.isApresentarMensagemErro = false;
    }, 4000);
  }

  private clearFormBuilderGroup() {
    this.formBuilderGroup.reset();
  }

  public redirionarTelaPessoa() {
    setTimeout(() => {
      this.router.navigateByUrl('/pessoa');
    }, 5000);
  }

}
