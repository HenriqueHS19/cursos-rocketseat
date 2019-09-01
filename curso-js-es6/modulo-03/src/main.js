/* Async/await
const promise = () => new Promise((resolve, reject) => {
  setTimeout(() => { resolve('OK')},  2000);
});

promise().then(response => {
  console.log(response);
});

async function executePromise(){
  const response = await promise();
  console.log(response);
}

executePromise();
*/

/* Axios
import axios from 'axios';

class Api {
  static async getUserInfo(username){
    try {
      const response = await axios.get('https://api.github.com/users/'+username);
      console.log(response);
    } catch (e) {
      console.log('Erro na API');
    } finally {

    }

  }
}

Api.getUserInfo('HenriqueHS19');
*/

/* Desafio do Modulo */
//01
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSecundo(){
    await delay(), console.log('1s');
    await delay(), console.log('2s');
    await delay(), console.log('3s');
}

umPorSecundo();

//02
import axios from 'axios';

async function getUserGitHub(userName){
  try {
    const response = await axios.get('https://api.github.com/users/'+userName);
    console.log(response.data);
  } catch (e) {
    console.log('Usuario não encontrado');
  }
}

getUserGitHub('HenriqueHS19');

//03
class GitHub {

  static async getRepository(repository){
    try {
      const response = await axios.get('https://api.github.com/repos/'+repository);
      console.log(response.data);
    } catch (e) {
      console.log('Repository not exists');
    }
  }

}

GitHub.getRepository('react-community/react-navigation');

//04
const buscaUsuario = async usuario => {
  try {
    const response = await axios.get('https://api.github.com/users/'+user);
    console.log('04 ' + reponse.data);
  } catch (e) {
    console.log('Usuario não existe');
  }
}

buscaUsuario('HenriqueHS19');
