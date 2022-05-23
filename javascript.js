var segredo = Math.round(Math.random() * 10);
var input = document.querySelector("input");
input.focus();
function verifica() {
	if(input.value == segredo) {
		alert("Você Acertou!");
		segredo = Math.round(Math.random() * 10);
	} else {
		alert("Você Errou!");				
	}
	input.focus();
	input.value = "";
}
input.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
		event.preventDefault();
		document.querySelector("button").click();
	}
});
var button = document.querySelector("button");
button.onclick = verifica;