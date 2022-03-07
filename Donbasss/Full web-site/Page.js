       $(document).on('click','.play-btn a',function(){
           $('.play').addClass('active-popup');
       });
       $(document).on('click','.close-movie',function(){
           $('.play').removeClass('active-popup');
       });
       $('.play-btn a').click(function(){
           $('#m-video')[0].play();
       });
       $('.close-movie').click(function(){
           $('#m-video')[0].pause();
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
       });
       function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}
document.getElementById('scroll').addEventListener('click', scrollToElement);
function scrollToElement(e) {
element = document.getElementById("myVideo")
element.scrollIntoView(true);
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
