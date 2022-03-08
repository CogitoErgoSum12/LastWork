const renderGenres = (genres) => {
    let renderedList = ''

    genres.forEach((genre, index) => {
        renderedList += `
      <button onclick="onGenreClick('${genre}', ${index})" class="btn">
        ${genre}
      </button>
    `
    })

    document.getElementById('genres-container').innerHTML = renderedList
}
const renderFilms = (films) => {
    let renderedList = ' '
    films.forEach(film => {
        renderedList += `
    <li class="film-card">
    <div class="film-card__image">
        <div class="film-card__rate">
            ${film.rate}
        </div>
        <img src="${film.img.split(' ')[0]}" alt="film cover ${film.title}">
    </div>
    <div class="film-card__info">
        <h5 class="film-card__title">
            ${film.title}
        </h5>
        <span class="film-card__desc">
            ${film.description}
        </span>
        <span class="film-card__producers">
            ${film.producers}
        </span>
    </div>
    <div class="film-card__watch">
        <button class="btn btn-primary film-card__watch-button">Смотреть</button>
    </div>
  </li>
    `
        document.querySelector('#catalog__films').innerHTML = renderedList
    })
}


const parseGenre = (producers) => {
    return producers.split('•')[1].split('Режиссёр')[0].replaceAll(' ', '')
}

const onGenreClick = (genre, index) => {
    Array.from(
        document.getElementById('genres-container').querySelectorAll('button')
    )[index].classList.toggle('btn-active');

    const activeGenres = Array.from(
        document.getElementById('genres-container').querySelectorAll('.btn-active')
    ).map(btn => btn.innerText)

    renderFilms(window.films.filter(({producers}) => activeGenres.includes(parseGenre(producers))))
}


document.getElementById('catalog__search-input').addEventListener('keyup', (e) => {
    renderFilms(window.films.filter(({title}) => {
        return title.toLowerCase().includes(e.target.value.toLowerCase())
    }))
})


const getFilms = async () => {
    try {
        const res = await fetch('https://api.npoint.io/e7e91bcbb4a2914bb3dd')
        const {films} = await res.json();
        window.films = films
        const genres = [...new Set(films.map(({producers}) => parseGenre(producers)))]

        renderFilms(films)
        renderGenres(genres)
    } catch (error) {
        document.querySelector('#catalog__films').innerHTML = 'К сожалению, произошла ошибка при попытке получить список фильмов'
    }
}

function init() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('#topBtn').fadeIn();
        } else {
            $('#topBtn').fadeOut();
        }
    });

    $(document).ready(function () {

        $(window).scroll(function () {
            if ($(this).scrollTop() > 40) {
                $('#topBtn').fadeIn();
            } else {
                $('#topBtn').fadeOut();
            }
        });

        $("#topBtn").click(function () {
            $('html ,body').animate({scrollTop: 0}, 0);
        });
        $("#downBtn").click(function () {
            $('html ,body').animate({scrollTop: 1000}, 0);
        });
    });

    getFilms()
}


$(document).ready(init);

/* Open */
function openNav() {
    document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

logusername = document.querySelector('#log-username');
logpass = document.querySelector('#log-password');
logbtn = document.querySelector('#log-btn');
logbtn.setAttribute('disabled', true);
logusername.oninput = function () {
    if (logusername.value.length > 0) {
        logpass.oninput = function () {
            if (logpass.value.length > 0) {
                logbtn.removeAttribute('disabled');
            } else {
                logbtn.setAttribute('disabled', true);
            }
        }
    }
}

/*function darkmode() {
    var element = document.body;
    var elementt = document.getElementById("info-block");
    var elementtt = document.getElementById("vert-bar");
    var elementttt = document.getElementById("all-info");
    var elements = document.getElementsByTagName("a");
    element.classList.toggle("dark-mode");
    elementt.classList.toggle("dark-mode1");
    elementtt.classList.toggle("dark-mode2");
    elementttt.classList.toggle("dark-mode3");
    elements.classList.toggle("dark-mode4");
}*/
let audio = new Audio("../../clickUp.mp3");

audio.oncanplaythrough = turnAudio();

function turnAudio() {
    audio.play();
}

let darkmode_body = $("body");
let element__all_info = $(".all-info");


let button = $("button");

button.on("click", function (){
    darkmode_body.toggleClass("dark-mode");


    element__all_info.toggleClass("dark-mode3");

})