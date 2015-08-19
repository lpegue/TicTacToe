var player = 1;
 	


var chooseLetter = document.querySelectorAll(".square");

	chooseLetter[0].addEventListener("click", function (){
		if (player % 2 === 0) {
		document.getElementById("click0").innerText="x"
 	} else {
		document.getElementById("click0").innerText="o"
 	}
 	player ++
	})


chooseLetter[1].addEventListener("click", function (){
	if (player % 2 === 0) {
		document.getElementById("click1").innerText="x"
 	} else {
		document.getElementById("click1").innerText="o"
 	}
 	player ++
	})


chooseLetter[2].addEventListener("click", function (){
	if (player % 2 ==0) {
		document.getElementById("click2").innerText="x"
 	} else {
		document.getElementById("click2").innerText="o"
 	}
 	player ++
	})

chooseLetter[3].addEventListener("click", function (){
	if (player % 2 === 0) {
		document.getElementById("click3").innerText="x"
 	} else {
		document.getElementById("click3").innerText="o"
 	}
 	player ++
	})

chooseLetter[4].addEventListener("click", function (){
	if (player % 2 === 0) {
		document.getElementById("click4").innerText="x"
 	} else {
		document.getElementById("click4").innerText="o"
 	}
	player ++
	})


chooseLetter[5].addEventListener("click", function (){
	if (player % 2 === 0) {
		document.getElementById("click5").innerText="x"
 	}
 	else {
		document.getElementById("click5").innerText="o"
 	}
 	player ++
	})


chooseLetter[6].addEventListener("click", function (){
	if (player % 2 === 0) {
		document.getElementById("click6").innerText="x"
 	} else {
		document.getElementById("click6").innerText="o"
 	}
 	player ++
	})

chooseLetter[7].addEventListener("click", function (){
	if (player % 2 === 0) {
		document.getElementById("click7").innerText="x"
 	} else {
		document.getElementById("click7").innerText="o"
 	}
 	player ++
	})


chooseLetter[7].addEventListener("click", function (){
	if (player % 2 === 0) {
		document.getElementById("click7").innerText="x"
 	} else {
		document.getElementById("click7").innerText="o"
 	}
 	player ++
	})

chooseLetter[8].addEventListener("click", function (){
		if (player % 2 === 0) {

		document.getElementById("click8").innerText="x"
 	}
 	else {
		document.getElementById("click8").innerText="o"
 	}
 	player ++
	})



document.querySelector("reset").addEventListener("click", clearSquare())
	function clearSquare () {
		//if (document.getElementById("click0").innerText = "x" || "o" || "")
		console.log("hi there")
		document.getElementById("click0").innerText = "";

}