var botaoTwitter = document.getElementById("botaoTwitter");
var botaoFacebook = document.getElementById("botaoFacebook");

botaoTwitter.addEventListener("click", function() {
	let alink = montaLinkTwitter();
	window.open(alink);
});

botaoFacebook.addEventListener("click", function() {
	let alink = montaLinkFacebook();
	window.open(alink);
});

function montaLinkTwitter() {
	let url = window.location.href;
	let poesia = document.getElementById("estrofe").textContent;
	let poeta = document.getElementById("poeta").textContent;
	let alink = "https://twitter.com/intent/tweet?text="+poesia+"%0A - "+poeta+"%0A%0A"+url;

	return alink;
}

function montaLinkFacebook() {
	//let url = window.location.href;
	let url = "www.filosorap.com.br"
	console.log(url);
	let poesia = document.getElementById("estrofe").textContent;
	let poeta = document.getElementById("poeta").textContent;
	let alink = "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F"+url+"&quote="+poesia+"%0A - "+poeta+"%0A%0A";

	return alink;
}
