"use strict";

document.addEventListener('DOMContentLoaded', () =>{
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const promoAdv = document.querySelectorAll(".promo__adv img"),
      promoGenre = document.querySelector(".promo__genre"),
      promoBg = document.querySelector(".promo__bg"),
      promoList = document.querySelector(".promo__interactive-list"),
      addForm = document.querySelector('form.add'),
      addInput = document.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if(newFilm){
      if(newFilm.length > 21){
        newFilm = `${newFilm.substring(0, 22)}...`
      }

      if (favorite){
        console.log("Добавляем любимый фильм");
      }
      movieDB.movies.push(newFilm);
      sortArray(movieDB.movies);
      createMovieList(movieDB.movies, promoList);//при нажатии на кнопку чтобы добавлялся фильм в массив
    }
    event.target.reset();
  });

  const deleteAdv = (arr) => {
      arr.forEach(item =>{
        item.remove();
      });
  };


  const makeChanges = () => {
    promoGenre.innerText = `Драма`;
    promoBg.style.backgroundImage = "url(img/bg.jpg)";
  };


const sortArray = (arr) =>{
  arr.sort();
}

  promoAdv.forEach((img) => {
    img.remove();
  });


  function createMovieList(films, parent){
    parent.innerText = ``;
    sortArray(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
                        <li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                        </li>
    `;
    });
    document.querySelectorAll('.delete').forEach((btn, i)=>{
      btn.addEventListener('click', ()=>{
        btn.parentElement.remove();//удаляем родителя корзины (то-есть лишкуli)
        movieDB.movies.splice(i, 1);
        createMovieList(films, parent);//по новому перерисововать пересортированные числа
      })
    });
  }
  deleteAdv(promoAdv);
  makeChanges();
  createMovieList(movieDB.movies, promoList)
});


