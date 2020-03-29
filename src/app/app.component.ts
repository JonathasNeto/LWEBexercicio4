import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Projeto';
  titulo = null;
  idade = null;
  pessoas= [
    
  ];
  adicionar(){
    
    this.pessoas.push(new Pessoa(this.titulo,this.idade));
    this.titulo = null;
    this.idade = null;
   
  }
  excluir(id){
    this.pessoas.splice(this.pessoas.indexOf(id),1); 
  }
  pessoaNova(){
    let aux = 999;
    var p = null;
    let i = 0;
    while (i < this.pessoas.length){
      if(parseInt(this.pessoas[i].idade) <= aux){
        p = this.pessoas[i];
        aux = parseInt(this.pessoas[i].idade);
      }
      i++
    }
    return p; 
  }
  pessoaVelha(){
    let aux = 0;
    var p = null;
    let i = 0;
    while (i < this.pessoas.length){
      if(parseInt(this.pessoas[i].idade) >= aux){
        p = this.pessoas[i];
        aux = parseInt(this.pessoas[i].idade);
      }
      i++
    }
    return p; 
  }
}
class Pessoa{
  nome = null;
  idade = null;
  constructor(nome,idade){
    this.nome = nome;
    this.idade = idade;
  }
  
  toString(){
    return this.nome+" e a Idade e: "+this.idade+" anos";
  }
}