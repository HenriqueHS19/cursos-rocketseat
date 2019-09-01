//Importando todas as 'functions' do arquivo 'function.js' e armazenando em um objeto
//import * as functions from './functions';

//Desafio
//1.1
import { default as ClasseUsuario } from './functions';

ClasseUsuario.info();

//1.2
import { idade } from './functions';
console.log(idade);

//1.3
import { default as ClassUsuario, idade as IdadeUsuario} from './functions';
console.log(IdadeUsuario);
