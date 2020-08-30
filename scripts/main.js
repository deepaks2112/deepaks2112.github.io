let par = document.getElementById("age");
let date = new Date();
let year = date.getFullYear() - 2000;
console.log(year);
par.innerHTML = "My name is Deepak Singh. I am " + year + " years old.\nI am attending Indian Institute of Technology Bhilai since 2017, enrolled in Bachelor of Technology (Honours) in Computer Science.";