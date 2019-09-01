import axios from 'axios';

class App {
  constructor() {
    this.repositories = [];

    this.form = document.querySelector('.form-repository');
    this.txtRepository = document.querySelector('input[name = txtRepository]');
    this.list = document.querySelector('.list-repository');

    this.registerHandlers();
  }

  registerHandlers(){
    this.form.onsubmit = event => this.addRepository(event);
  }

  setLoading(loading){
    if (loading){
      let span = document.createElement('span');
      span.appendChild(document.createTextNode('Carregando...'));
      span.setAttribute('id', 'loading');
      this.form.appendChild(span);
    }
    else{
      document.getElementById('loading').remove();
    }
  }

  async addRepository(event) {

    event.preventDefault();

    if (this.txtRepository.value.length > 0){
      try {
        this.setLoading(true);
        const response = await axios.get('https://api.github.com/repos/' +this.txtRepository.value);
        console.log(response.data);

        const { name, description, owner: { avatar_url }, html_url } = response.data;
  
        this.repositories.push({
          name,
          description,
          avatar_url,
          html_url
        });
    
        this.render();
        this.setLoading(false);

      } catch (error) {
        alert('Repositorio não encontrado');      
      }

    }
    else {
      alert('Insira o repositorio');
    }
  }

  render(){
    this.list.innerHTML = '';

    this.repositories.forEach(repository => {
      let li = document.createElement('li');

      let img = document.createElement('img');
      img.setAttribute('src', repository.avatar_url);

      let strong = document.createElement('strong');
      strong.appendChild(document.createTextNode(repository.name));

      let p = document.createElement('p');
      p.appendChild(document.createTextNode(repository.description));

      let a = document.createElement('a');
      a.setAttribute('href', repository.html_url);
      a.appendChild(document.createTextNode('Acessar'));

      li.appendChild(img);
      li.appendChild(strong)
      li.appendChild(p);
      li.appendChild(a);

      this.list.appendChild(li);
    });

    this.txtRepository.value = '';

  }

}

new App();
