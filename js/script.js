function myFunction(value) {
	document.getElementById("ketqua").value += +value
}
function tinhtoan() {
	try{
		var ketqua = eval(document.getElementById("ketqua").value);
		document.getElementById("ketqua").value = ketqua;
	}catch(e){
		document.getElementById("ketqua").value = 'Thằng ngu';
	}
}
function phay() {
	document.getElementById("ketqua").value += "."
}	
function cong() {
	document.getElementById("ketqua").value += "+"
}
function tru() {
	document.getElementById("ketqua").value += "-"
}
function nhan() {
	document.getElementById("ketqua").value += "*"
}
function chia() {
	document.getElementById("ketqua").value += "/"
}
function dellete() {
	var ketqua = document.getElementById("ketqua").value
	var newketqua = ketqua.slice(0, -1)
	document.getElementById("ketqua").value = newketqua;
}
function pi() {
	var soPi = Math.PI;
	document.getElementById("ketqua").value += soPi;	
}
function reset() {
	document.getElementById("ketqua").value = '';
}
function percent() {
	var x = eval(document.getElementById("ketqua").value);
	document.getElementById("ketqua").value = (x / 100);
}


