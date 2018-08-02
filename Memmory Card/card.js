// KHAI BÁO
var cards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7'];
var current = null;
var score = 0;
var timeLimit = 30;
// ĐẢO PHẦN TỬ TRONG MẢNG
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}
function flip(card) {
	$(card).toggleClass('flipped');
	if (!current) {
		current = $(card);
		current.css('pointer-events', 'none');
	} else {
		$('.card').css('pointer-events', 'none');
		if (current.attr('data-name') != $(card).attr('data-name')) {
			console.log('fall');
			setTimeout(function(){
				current.toggleClass('flipped');
				$(card).toggleClass('flipped');
				current = null;
				document.getElementById('fall_music').play();
				$('.card').css('pointer-events', 'auto');
			}, 700);	
		} else {			
			console.log('true');
			setTimeout(function(){
				current.css('opacity' , '0');
				$(card).css('opacity' , '0');	
				current = null;
				score++;
				document.getElementById('true_music').play();
				$('.card').css('pointer-events', 'auto');
				if (score == 7) {
					document.getElementById('true_music').load();
					document.getElementById('start_music').load();
					document.getElementById('win_music').play();
					document.getElementById('win').style.display = "block";
				}
			}, 800);
		}
	}
}

// NHÚNG LÁ BÀI VÀO HTML
$(function() {
	cards = cards.concat(cards);
	cards = shuffle(cards);
	var html = '';
	for (var i = 0; i < cards.length; i++) {
		html += '<div class="card" data-name=" ' + cards[i] + ' " onclick="flip(this)"> <div class="card_backside"> <img src="image/' + cards[i] + '.jpg"> </div> <div class="card_front"> <img src="image/back.jpg"> </div> </div>';
	}
	$('.wrap').html(html);
});
// Progress
// setInterval (function () {
// 	var time = document.getElementById("time").value ;
// 	time--;
// 	timeLimit--;
// }, 1000);

// LOAD CONTENT

function loadContent() {
	document.getElementById("start_game").style.display = "block";
	document.getElementsByClassName("load").style.display = "none";
	// document.getElementsByClassName("load").style.display = "none";
	// var cards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7'];
	// var current = null;
	// var score = 0;
	// // document.getElementsByClassName('load').style.display = "none";
	// $(function() {
	// 	cards = cards.concat(cards);
	// 	cards = shuffle(cards);
	// 	var html = '';
	// 	for (var i = 0; i < cards.length; i++) {
	// 		html += '<div class="card" data-name=" ' + cards[i] + ' " onclick="flip(this)"> <div class="card_backside"> <img src="image/' + cards[i] + '.jpg"> </div> <div class="card_front"> <img src="image/back.jpg"> </div> </div>';
	// 	}
	// 	$('.wrap').html(html);
	// 	document.getElementById('win_music').load();
	// 	document.getElementById('start_music').play();

	// });
};
function normal() {
	var cards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7'];
	var current = null;
	var score = 0;
	document.getElementById("start_game").style.display = "none";
	document.getElementsByClassName("load").style.display = "none";
	// document.getElementsByClassName('load').style.display = "none";
	$(function() {
		cards = cards.concat(cards);
		cards = shuffle(cards);
		var html = '';
		for (var i = 0; i < cards.length; i++) {
			html += '<div class="card" data-name=" ' + cards[i] + ' " onclick="flip(this)"> <div class="card_backside"> <img src="image/' + cards[i] + '.jpg"> </div> <div class="card_front"> <img src="image/back.jpg"> </div> </div>';
		}
		$('.wrap').html(html);
		document.getElementById('win_music').load();
		document.getElementById('start_music').play();

	});
	
	document.getElementById("start_game").style.display = "none";
};
function hard() {
	var cards = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7'];
	var current = null;
	var score = 0;
	document.getElementById("start_game").style.display = "none";
	document.getElementsByClassName('load').style.display = "none";
	$(function() {
		cards = cards.concat(cards);
		cards = shuffle(cards);
		var html = '';
		for (var i = 0; i < cards.length; i++) {
			html += '<div class="card" data-name=" ' + cards[i] + ' " onclick="flip(this)"> <div class="card_backside"> <img src="image/' + cards[i] + '.jpg"> </div> <div class="card_front"> <img src="image/back.jpg"> </div> </div>';
		}
		$('.wrap').html(html);
		document.getElementById('win_music').load();
		document.getElementById('start_music').play();
	});
	
};