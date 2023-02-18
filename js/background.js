
function toggleBackgroundColor() {

	// Obtém a cor atual de fundo
	var currentBackgroundColor = document.body.style.backgroundColor;
	// Verifica se a cor atual é branca
	if (currentBackgroundColor === "white" || currentBackgroundColor === "") {
		// Se a cor atual for branca, altera para preto
		document.body.style.backgroundColor = "black";
		document.body.style.color = "white";

	} else {
		// Se a cor atual for preta, altera para branca
		document.body.style.backgroundColor = "white";
		document.body.style.color = "black";
	}
}