// Đáp án : B B C D A.
var question1 = {
	question: "Hà Nội là thủ đô nước nào?",
	answer1: "A. Nhật Bản",
	answer2: "B. Việt Nam",
	answer3: "C. Pháp",
	answer4: "D. Thái Lan",
	correctAnswer: "B. Việt Nam",
};
var question2 = {
	question: "Con gà có mấy chân?",
	answer1: "A. 1",
	answer2: "B. 2",
	answer3: "C. 3",
	answer4: "D. 4",
	correctAnswer: "B. 2",
};
var question3 = {
	question: "Đâu là tên một loại mũ?",
	answer1: "A. Lưỡi hái",
	answer2: "B. Lưỡi lê",
	answer3: "C. Lưỡi trai",
	answer4: "D. Lưỡi rắn",
	correctAnswer: "C. Lưỡi trai",
};
var question4 = {
	question: "Bảy chú lùn trong truyện cổ tích &#34 Nàng bạch tuyết và bảy chú lùn &#34 làm nghề gì?",
	answer1: "A. Thợ rèn",
	answer2: "B. Thợ may",
	answer3: "C. Thợ săn",
	answer4: "D. Thợ mỏ",
	correctAnswer: "D. Thợ mỏ",
};
var question5 = {
	question: "Đâu là thủ đô của nước Pháp?",
	answer1: "A. Paris",
	answer2: "B. Cairo",
	answer3: "C. Berlin",
	answer4: "D. Rome",
	correctAnswer: "A. Paris",
};
var arr = [question1, question2, question3, question4, question5];
var a1 = document.getElementById("answer1");
var a2 = document.getElementById("answer2");
var a3 = document.getElementById("answer3");
var a4 = document.getElementById("answer4");
var q = document.getElementById("question");
var x = 1;
var y = arr.length;
var score = 0;
q.innerHTML = arr[0].question;
a1.innerText = arr[0].answer1;
a2.innerText = arr[0].answer2;
a3.innerText = arr[0].answer3;
a4.innerText = arr[0].answer4;
document.getElementById("footer").innerHTML = "<i><b>Câu hỏi: "+ x + '/' + y +"</b></i>";
for(var btnAnswer = document.getElementsByClassName("answer") , i = 0 ; i < btnAnswer.length ; i++) btnAnswer[i].addEventListener("click", function() {
	if (this.innerText == arr[x - 1].correctAnswer && (score += 1), console.log(this.innerText), x < arr.length)
		q.innerHTML = arr[x].question,
	a1.innerHTML = arr[x].answer1,
	a2.innerHTML = arr[x].answer2,
	a3.innerHTML = arr[x].answer3,
	a4.innerHTML = arr[x].answer4,
	document.getElementById("footer").innerHTML = "<i><b>Câu hỏi: "+ (x + 1) + '/' + y +"</b></i>";
	else if (5 == score)window.location.href = "youwin.html";
	else  {
		document.getElementById("content").style.display = "none",
		document.getElementById("footer").style.display = "none",
		document.getElementById("lose").style.display = "block",
		document.getElementById("lose").innerHTML = "<h1>Rất tiếc bạn đã thất bại !</h1>",
		document.getElementById("again").style.display = "block",
		// for(var z = 0; z < score; z++)
		document.getElementById("again").innerHTML = "<button onclick = 'Again()'>Play's Again!</button>";
		document.getElementById("result").innerHTML = "<h3>Trả lời đúng: " + score + '/' + y + "</h3>";
		document.getElementById("result").style.display = "block";
	};
	x += 1;
});
	function Again() {
		document.getElementById("content").style.display = "block",
		document.getElementById("footer").style.display = "block",
		document.getElementById("lose").style.display = "none",
		document.getElementById("again").style.display = "none";
		document.getElementById("result").style.display = "none";
		x = 1;
		score = 0;
		console.log(x);
		q.innerHTML = arr[0].question;
		a1.innerText = arr[0].answer1;
		a2.innerText = arr[0].answer2;
		a3.innerText = arr[0].answer3;
		a4.innerText = arr[0].answer4;
		document.getElementById("footer").innerHTML = "<i><b>Câu hỏi: "+ x + '/' + y +"</b></i>";
	};
