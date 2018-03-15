// import {Post } from './post.js';



// const inputFunction = () => {

// }
const uiModule = (($) => {

  class Post {
    constructor(id, title, intro) {
      this.id = id;
      this.title = title;
      this.intro = intro;
    }
  }


  let card = (post) => {
    return `
    <div class="row">
    <div class="col s12 m6">
    <div class="card blue-grey darken-1">
    <div class="card-content white-text">
    <span class="card-title">${post.title}</span>
    <p>${post.intro}</p>
    </div>
    
    </div>
    </div>
    </div>
    `
  };

  $inputPlace = $(".row");

  const inputFunction = () => {
    fetch("http://127.0.0.1:3000/")
      .then(function (response) {

        return response.json();
      })
      .then(function (jsonResponse) {
        jsonResponse.forEach(element => {
          let newPost = new Post(element.id, element.title, element.intro);
          let newcard = card(newPost);
          $inputPlace.append(newcard);
        });
      })

  };

  return {
    inputFunction
  }

})(jQuery);