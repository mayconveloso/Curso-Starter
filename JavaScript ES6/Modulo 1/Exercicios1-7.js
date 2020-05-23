// # Excercício 1 Begin

class Usuario  {
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
        this.admin = false;
    }
    isAdmin(){ return (this.admin == true ? true : false)}
}


class Admin extends Usuario {
    constructor() {
        super();
        this.admin = true;
    }
}

const User1 = new Usuario('email@maycon.com','senha');
const Adm1 = new Admin('email@adm.com','senha');

console.log('#1')
console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

// # Excercício 1 End
//-------------------------------------------------------------------------------------------------------------//
// # Excercício 2 Begin

console.log('#2')
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

//2.1
const map = usuarios.map( function(item){
    var idade = [];
    idade.push = {idade} = item;
    return idade;
})
console.log(map);

//2.2
const filter = usuarios.filter( function( {idade, empresa} = usuarios) {
    return idade > 18 && empresa === 'Rocketseat' ;
})
console.log(filter);

//2.3
const find = usuarios.find( function ({empresa} = usuarios) {
    return empresa == 'Google';
})
console.log(find);

//2.4
const calculo = usuarios.map(users => ({...users, idade: users.idade * 2})).filter(users => users.idade <= 50)
console.log(calculo);

// # Excercício 2 End
//-------------------------------------------------------------------------------------------------------------//
// # Excercício 3 Begin

console.log('#3')

// 3.1
const arr = [1, 2, 3, 4, 5];
var arrNovo = arr.map(item => item + 10);
console.log(arrNovo);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = usuario => console.log(usuario.idade);
mostraIdade(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));


// 3.4
const promise = ()=> new Promise((resolve, reject)=>resolve());
console.log(promise);

// # Excercício 3 End
//-------------------------------------------------------------------------------------------------------------//
// # Excercício 4 Begin

console.log('#4');
const empresa = {
    nome1: 'Rocketseat',
    endereco: {
    cidade1: 'Rio do Sul',
    estado: 'SC',
    }
};

// 4.1
const { nome1, endereco: {cidade1}} = empresa;
console.log(nome1); // Rocketseat
console.log(cidade1); // Rio 

// 4.2
function mostraInfo( {nome, idade}) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// # Excercício 4 End
//-------------------------------------------------------------------------------------------------------------//
// # Excercício 5 Begin

console.log('#5')
//5.1
const array = [1, 2, 3, 4, 5, 6];
const [ x, ...y] = array;
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]


// function soma...
const soma = (...tudo) => tudo.reduce(function(total,next){return total+ next});
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2
const usuario10 = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = { ...usuario10, nome: 'Gabriel'};
console.log(usuario2);
const usuario3 = { ...usuario10,endereco: { cidade: 'Londrina'}};
console.log(usuario3);

// # Excercício 5 End
//-------------------------------------------------------------------------------------------------------------//
// # Excercício 6 Begin

console.log('#6');
const usuario5 = 'Diego';
const idade1 = 23;
console.log(`O usuário ${usuario5} possui ${idade1} anos`);

// # Excercício 6 End
//-------------------------------------------------------------------------------------------------------------//
// # Excercício 7 Begin

console.log('#7');
const nome3 = 'Diego';
const idade3 = 23;

const usuario6 = {
    nome3,
    idade3,
    cidade: 'Rio do Sul',
};

console.log(usuario6);

// # Excercício 7 End