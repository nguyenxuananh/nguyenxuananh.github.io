 $(document).ready(function($) {    
  $(window).scroll(function(){
    if($(this).scrollTop() > 70){
      $('.menu').addClass('fixed-top')
      $('.menu').css('box-shadow', '0px 2px 2px rgba(0,0,0,0.5)')
      $('.menu').css('z-index', '1000')
    }else {
      $('.menu').removeClass('fixed-top')
      $('.menu').css('box-shadow', '0px 0px 0px 0px')
    }
    if ($(this).scrollTop() > 800) {
      $('.back').css('display', 'block')
    }else {
      $('.back').css('display', 'none')
    }
  })
});
 // animate css
 $(window).scroll(function() {
   if ($(this).scrollTop() > 400) {
    $('.wrap').addClass('animated bounceInLeft');
  }else {
    $('.wrap').removeClass('animated bounceInLeft');
  }
  if ($(this).scrollTop() > 1200) {
    $('#myTabContent').addClass('animated bounceInRight');
  }else {
    $('#myTabContent').removeClass('animated bounceInRight');
  }
  if ($(this).scrollTop() > 2110) {
    $('.container-fluid').addClass('animated zoomIn');
  }else {
    $('.container-fluid').removeClass('animated zoomIn');
  }
})

 $(document).ready(function($){
  $(".back").click(function(){
    $('html').animate({scrollTop:0},1000);
  });
});

 $('.messenger_a').click(function() {
  $('.messenger_form').toggle();
})

 var number = 1;
 for (i = number; i <= 20; i++) {
  var newUser = document.createElement("option");
  newUser.value = i;
  newUser.innerHTML = i;
  user.append(newUser);
};

