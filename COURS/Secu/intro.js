var app = {
    base_url: "http://localhost:3000/",
  
    init: () => {
      app.theButton = document.getElementById('get_lists');
  
      app.theButton.addEventListener('click', app.getLists );
    },
  
    getLists: async () => {
      let url = app.base_url+"lists";
      let response = await fetch(url);
      console.log(response);
  
      let lists = await response.json();
      console.log(lists);
      // on crée une <ul>
      let myUl = document.createElement('ul');
      for (let list of lists) {
        // pour chaque liste, on crée un <li> avec son nom, qu'on met dans le <ul>
        let myLi = document.createElement('li');
        
        myLi.innerHTML = list.name;
  
        myUl.appendChild(myLi);
      }
      // on a plus qu'à ajouter la ul à la div "result"
      document.getElementById('result').appendChild(myUl);
      
    }
  
  };
  
  
  document.addEventListener('DOMContentLoaded', app.init);