var date = new Date();

var day = date.getDate();
var month = date.getMonth();


$(function(){
  setVideoCenter();
  $(window).resize(setVideoCenter);
});
//-Alikhan
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
    $('html ,body').animate({scrollTop : 1200},0);
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
//-Bernur
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
//-Bernur
/*function darkmode() {
  let element = document.body;
  //element = document.getElementsByTagName("body")
  let element__info_block = document.getElementById("info-block");
  let element__vert_bar = document.getElementById("vert-bar");
  let element__all_info = document.getElementById("all-info");
  let elements_a = document.getElementsByTagName("a");
  let element__nav_text = document.getElementById("nav-text");
  let element_vertical_bar__text = document.getElementById("vertical-bar__text")
  element.classList.toggle("dark-mode");
  element__info_block.classList.toggle("dark-mode1");
  element__vert_bar.classList.toggle("dark-mode2");
  element__all_info.classList.toggle("dark-mode3");
  elements_a.classList.toggle("dark-mode4");
  element__nav_text.classList.toggle("dark-mode5");
  element_vertical_bar__text.classList.toggle("dark-mode_lis");
}*/
//-Bernur

let audio = new Audio("clickUp.mp3");

audio.oncanplaythrough = turnAudio();
function turnAudio(){
  audio.play();
}
/*element.classList.toggle("dark-mode");
element__info_block.classList.toggle("dark-mode1");
element__vert_bar.classList.toggle("dark-mode2");
element__all_info.classList.toggle("dark-mode3");
elements_a.classList.toggle("dark-mode4");
element__nav_text.classList.toggle("dark-mode5");
element_vertical_bar__text.classList.toggle("dark-mode_lis");*/
let darkmode_body = $(".body");
let element__info_block = $(".info-block");
let element__vert_bar = $(".vertical-bar");
let element__all_info = $(".all-info");



let button = $("button");

button.on("click", function (){
  darkmode_body.toggleClass("dark-mode");
  element__info_block.toggleClass("dark-mode1");

  element__all_info.toggleClass("dark-mode3");
  element__vert_bar.toggleClass("dark_vertical_bar");
})
