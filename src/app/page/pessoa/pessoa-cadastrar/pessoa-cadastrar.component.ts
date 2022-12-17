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

  public formBuilderGroup = this.formBuilder.group({
    codigo: [{ value: "", disable: true }],
    tipo: ["", Validators.required ],
    nome: ["", Validators.required ],
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

  public saveOne() {

    const pessoaModel = {
      tipo: {
        codigo: this.formBuilderGroup.controls["tipo"].value
      },
      nome: this.formBuilderGroup.controls["nome"].value
    }

    this.pessoaService.cadastrarPessoa(pessoaModel).subscribe( response => {
      this.apresentarMensagemSucesso();
      this.clearFormBuilderGroup();
    });

  }

  private apresentarMensagemSucesso() {
    this.isApresentarMensagemSucesso = true;
    setTimeout(() => {
      this.isApresentarMensagemSucesso = false;
    }, 4000);
  }

  private clearFormBuilderGroup() {
    this.formBuilderGroup.reset();
  }

}
