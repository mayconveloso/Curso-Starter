// class
//import { soma10 as soma, sub } from './funcoes';
import { soma10, sub } from './funcoes';
console.log(soma10(10,10));
console.log(sub(5,10));

//import * as funcoes from './soma';
import soma20, {multiplicacao} from './soma';
console.log(soma20(20,20));

class List {
    constructor() {
        this.nome = [];
    }
    
    add() {
        this.nome.push();
        console.log(this.nome);
    }
}


class TodoList extends List {
    constructor(){
        super();
        this.todos = [];
    }

    addTodo() {
        this.todos.push('novo todo');
        console.log(this.todos);
    }

}

const MinhaLista = new TodoList();

document.getElementById('todoconsole').onclick = function() {
    MinhaLista.addTodo('teste');
}

// classe + satatic = sempre que forem funções para retornaralgom sem precisar de muitas coisas

class Matematica {
    static soma (a,b) {
        return a + b;
    }
}

console.log(Matematica.soma(5,6));

// const - não posso mudar o nome da variavel
//  const a = 1; // sempre vai ser 1
const usuario = { nome : 'maycon'};
console.log(usuario);
// usuario = user; não épossivel
usuario.nome = 'felipe' // certo
console.log(usuario);

// let - respeita o escopo de onde ele está, caso tento acessar essa variável fora do seu escopo não é possível

function teste (x) {
    let y = 10;

    if (true) {
        return y + x;
    }

}
console.log(teste(2));
// console.log(y); não é possível

// arrays 

const arr = [1,3,4,5,6,8,9,10];

// map - vai percorrer o array e retornar quais são os item que ele contém e seu index
const newArr = arr.map(function(item,index) {
    return item*index;
})

console.log(newArr);

// reduce - vai somar todos arrays e retornar a soma
const sum = arr.reduce(function(total,next) {
    return total + next;
})

console.log(sum);

// filter - vai retornar somente os número que você filtrar com a sua seleção
const filter = arr.filter(function(item) {
    return item % 2 === 0;
})

console.log(filter);


// find - se existir o item no array ele vai retornar se não dara undefined
const find = arr.find(function(item) {
    return item === 2;
})

console.log(find);

// Arro functions

/* normal
const finde = arr.find(function(item) {
    return item === 2;
})
*/

/* quando for uma função sem nome "anonima"
const finde = arr.find((item) => {
    return item === 2;
})
*/

/* quando tiver apenas um parametro não precisa de parenteses
const finde = arr.find(item => {
    return item === 2;
})
*/

// se ela tiver somente uma linha pode retirar as chaves e o return;
const finde = arr.find(item => item === 2 );

const teste1 = () => ({ nome: 'Diego'});

console.log(teste1());

// valores padrões

const soma = (a = 3 , b = 4) =>  a + b;

console.log(soma());

// Desestruturação de objetos

const usuario1 = {
    nome: 'Maycon',
    idade: 20,
    endereco: {
        cidade: 'Santana de Parnaiba',
        estado: 'SP'
    }
}

// modo antigo
// const nome = usuario1.nome;
// const idade = usuario1.idade;
// const cidade = usuario1.endereco.cidade;

// modo novo, somente uma linha
const { nome , idade , endereco: { cidade} } = usuario1;

console.log(nome,idade,cidade);

/* também pode ser usado nos parametros das funções
function mostraNome({ nome , idade , endereco: { cidade} }){
    console.log(nome)
}

mostraNome(usuario1);
*/


// Operadores rest / spred

//REST - pegar o resto das propriedades

const usuario2 = {
    nome1: "Maycon",
    idade: 19,
    empresa: 'Improve Mente'
};

// ... -> rest operator
const { nome1 , ...resto} = usuario2;

console.log(nome1);
console.log(resto);

const array = [1,2,3,4,5];

const [a, b, ...c] = array;

console.log(a);
console.log(c);
console.log(c);

 function soma3(...params) {
     return params.reduce((total,next) => total + next);
 }

 console.log(soma3(1,2,3,4,5,6,7,8,9,10));

 // SPREAD

 const arr1 = [1,2,3];
 const arr2 = [4,5,6];

 const arr3 = [...arr1, ...arr2];

 console.log(arr3);

 const usuario3 = {
    nome: 'Maycon',
    idade: 19,
    empresa: 'Improvemente', 
 };

 const usuario4 = { ...usuario3, nome: 'Veloso'};

 console.log(usuario4);


 // Template Literals

 console.log(`Meu Nome é ${nome} e tenho ${idade}`);

 // Object short sintax

 const nomee = 'Diego';
 const idadee = 32;

 const usuario5 = {
    nomee,
    idadee,
    empresa: 'Rocketseat'
 }

 console.log(usuario5);