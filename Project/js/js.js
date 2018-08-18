var number = 1;
for (i = number; i <= 20; i++) {
	var newUser = document.createElement("option");
	newUser.value = i;
	newUser.innerHTML = i;
	user.append(newUser);
}
$(document).ready(function($) {    
    $(window).scroll(function(){
        if($(this).scrollTop() > 90){
       		$('.menu').addClass('fixed-top')
       		$('.menu').css('box-shadow', '0px 2px 2px rgba(0,0,0,0.5)')
       		$('.menu').css('z-index', '10000')
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
$(document).ready(function($){
    $(".back").click(function(){
        $('html').animate({scrollTop:0},1000);
    });
});
$('.messenger').click(function() {
  $('.messenger_form').toggle();
})
