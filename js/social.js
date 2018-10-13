var botao = document.getElementById("botao");

botao.addEventListener("click", function() {

	let alink = montaLinkTwitter();

	window.open(alink);
});

function montaLinkTwitter() {
	let url = window.location.href;
	let poesia = document.getElementById("estrofe").textContent;
	let poeta = document.getElementById("poeta").textContent;
	let alink = "https://twitter.com/intent/tweet?text="+poesia+"%0A - "+poeta+"%0A%0A"+url;

	return alink;
}
