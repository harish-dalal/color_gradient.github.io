let col1 = document.querySelector(".color1");
let col2 = document.querySelector(".color2");
let body = document.querySelector("body");

function changebackground(){
	console.log(col1.value);
	body.style.background = "linear-gradient(to right , "
	+col1.value
	+" , "
	+col2.value
	+ " )";
	console.log(body.style.background);
}

col1.addEventListener("input" , changebackground);

col2.addEventListener("input" , changebackground);