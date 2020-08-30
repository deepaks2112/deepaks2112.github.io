/* global document */
let shuffle = function(arr){
	for(let i=0;i<arr.length;i++){
		let r=Math.floor(Math.random()*i);
		let t=arr[r];
		arr[r]=arr[i];
		arr[i]=t;
	}
	return arr;
};

let shuffleAndShow = function(bingoMatrix) {
	bingoMatrix = shuffle(bingoMatrix);
	let text = "";
	for(let i=0;i<5;i++){
		text += "<tr>\n";
		for(let j=0;j<5;j++){
			text += "\t<td><a href=\"#\">" + bingoMatrix[5*i+j] + "</a></td>\n";
		}
		text += "</tr>\n";
	};
	let matrix = document.getElementById("matrix");
	matrix.innerHTML = text;
};

let setZero = function(arr) {
	for(let i=0;i<arr.length;i++){
		for(let j=0;j<arr[i].length;j++){
			arr[i][j]=0;
		}
	}
	return arr;
};

let checkRows = function(arr) {
	let ans=0;
	for(let i=0;i<arr.length;i++){
		let fl = true;
		for(let j=0;j<arr[i].length;j++){
			if(arr[i][j]==0){
				fl=false;
			}
		}
		if(fl === true){
			ans += 1;
		}
	}
	return ans;
};

let checkCols = function(arr) {
	let ans=0;
	for(let i=0;i<arr.length;i++){
		let fl = true;
		for(let j=0;j<arr[i].length;j++){
			if(arr[j][i]==0){
				fl=false;
			}
		}
		if(fl === true){
			ans += 1;
		}
	}
	return ans;
};

let checkDias = function(arr) {
	let ans=0;
	let fl = true;
	for(let i=0;i<arr.length;i++){
		if(arr[i][i]==0){
			fl=false;
		}
	}
	if(fl === true){
		ans += 1;
	}
	fl = true;
	for(let i=0;i<arr.length;i++){
		if(arr[i][arr.length-i-1]==0){
			fl=false;
		}
	}
	if(fl === true){
		ans += 1;
	}
	return ans;
};

let checkStatus = function(arr) {
	let r = checkRows(arr);
	let c = checkCols(arr);
	let d = checkDias(arr);
	let total = r + c + d;
	if(total >= 5) {
		return "B I N G O";
	}
	if(total >= 4) {
		return "B I N G";
	}
	if(total >= 3) {
		return "B I N";
	}
	if(total >= 2) {
		return "B I";
	}
	if(total >= 1) {
		return "B";
	}
	return "<br>";
};

$(document).ready(function(){

	let crossed = [[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0],
				[0,0,0,0,0]];
	let bingoMatrix = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,
						16,17,18,19,20,21,22,23,24,25];
	$(".btn").click(function(){
		shuffleAndShow(bingoMatrix);
		crossed = setZero(crossed);
		document.getElementById("status").innerHTML = "<br>";
	});
	$("#matrix").on("click", "td", function(){
		let col = $(this).parent().children().index($(this));
		let row = $(this).parent().parent().children().index($(this).parent());
		if(crossed[row][col]==0) {
			$(this).css("background-color", "pink");
			crossed[row][col] = 1;
		}else{
			$(this).css("background-color", "inherit");
			crossed[row][col] = 0;
		}
		let status = checkStatus(crossed);
		let statusField = document.getElementById("status");
		statusField.innerHTML = "\n\t" + status + "\n";
		if(status == "B I N G O") {

			alert("You can shout BINGO!");
		}
	});
});

// let a = matrix.p;