/* global document */
let expr = "";
let calc = false;
let screen = document.getElementById("resultScreen");

let onClick = function(dig) {
	if(dig === "=") {
  	expr = eval(expr);
    screen.innerHTML = expr;
    expr = "";
    calc = true;
    return;
  }
  if(dig === "C") {
  	expr = "";
    screen.innerHTML = "<br>";
    return;
  }
  if(calc === true) {
  	expr = "";
    calc = false;
  }
  expr += dig
  screen.innerHTML = expr;
};
