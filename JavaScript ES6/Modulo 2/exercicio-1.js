/*  functions.js */

export const idade = 23;

export default class Usuario {
    static info() {
        console.log('Apenas Teste');
    }
}

/*  functions.js */


//1.1
import ClasseUsuario from './functions';
ClasseUsuario.info();

// 1.3
import Usuario, { idade } from './functions';
console.log(idade); //1.2

//1.4
import defaultUsuario, { idade as IdadeUsuario } from './functions';

console.log(IdadeUsuario);




import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try {
            const response = await axios.get(`http://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('mayconveloso');
Api.getUserInfo('mayconveosagasfafgquf');

//1.1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
const umPorSegundo = async () => {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}
umPorSegundo();

//1.2
const getUserFromGithub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.log('Usúario não existe');
    }
}
getUserFromGithub('mayconveloso');



//1.3
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https:/api.github.com/repos/${repo}`);
            console.log(response.data);
        } catch (err) {
            console.log('Repositório não existe')
        }
    }
}
Github.getRepositories('mayconveloso/Curso-Starter');

//1.4
const buscaUsuario = async usuario => {
    try {
        const responseUsuario = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(responseUsuario.data);
    } catch (err) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('mayconveloso')