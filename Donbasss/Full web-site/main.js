var date = new Date();

var day = date.getDate();
var month = date.getMonth();


$(function(){
  setVideoCenter();
  $(window).resize(setVideoCenter);
});

$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#topBtn').fadeIn();
    } else{
      $('#topBtn').fadeOut();
    }
  });

  $("#topBtn").click(function(){
    $('html ,body').animate({scrollTop : 0},0);
  });
  $("#downBtn").click(function(){
    $('html ,body').animate({scrollTop : 1000},0);
  });
  renderUpdateBlock();
});


const renderUpdateBlock = async () => {
  const cardListWrapper = document.querySelector('#update-block__films')
  try {
    const res = await fetch("https://api.npoint.io/490b03dbf678e83dd041")
    const {films} = await res.json();

    let renderedList = ''
    films.forEach(film => {
      renderedList += `
      <li class="news-list__item">
        <div class="new__date">  </div>
        <div class="new__info">
          <div class="update_img">
              <img src="${film.img.split(' ')[0]}" alt="film cover ${film.title}">
          </div>
          <h4 class="new__title">
            ${film.title}
          </h4>
          <div class="new__description">
            <span>${film.meaning}</span>
          </div>
        </div>
      </li>
      `
      cardListWrapper.innerHTML = renderedList
    })
  } catch (error) {
    cardListWrapper.innerHTML = 'К сожалению, произошла ошибка при попытке получить список обновлений'
  }
}

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
logusername.oninput = function() {
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


function darkmode() {
  var element = document.body;
  var elementt = document.getElementById("info-block");
  var elementtt = document.getElementById("vert-bar");
  var elementttt = document.getElementById("all-info");
  var elements = document.getElementsByTagName("a");
  var elementa = document.getElementById("nav-text");
  element.classList.toggle("dark-mode");
  elementt.classList.toggle("dark-mode1");
  elementtt.classList.toggle("dark-mode2");
  elementttt.classList.toggle("dark-mode3");
  elements.classList.toggle("dark-mode4");
  elementa.classList.toggle("dark-mode5");
}


let audio = new Audio("clickUp.mp3");

audio.oncanplaythrough = turnAudio();
function turnAudio(){
  audio.play();
}


