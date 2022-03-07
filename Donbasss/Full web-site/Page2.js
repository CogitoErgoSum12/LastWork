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
