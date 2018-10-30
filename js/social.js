var botaoTwitter = document.getElementById("botaoTwitter");
var botaoFacebook = document.getElementById("botaoFacebook");
var botaoWhatsapp = document.getElementById("botaoWhatsapp");

botaoTwitter.addEventListener("click", function() {
	let alink = montaLink("twitter");
	window.open(alink);
});

botaoFacebook.addEventListener("click", function() {
	let alink = montaLink("facebook");
	window.open(alink);
});

botaoWhatsapp.addEventListener("click", function() {
	let alink = montaLink("whatsapp");
	window.open(alink);
});

function montaLink(social) {
	let url = window.location.href;
	let poesia = document.getElementById("estrofe").textContent;
	let poeta = document.getElementById("poeta").textContent;
	let alink = ""
	if(social === "facebook") {
		alink = "https://www.facebook.com/sharer/sharer.php?u="+"www.filosorap.com.br"
		+"&quote="+poesia+"%0A - "+poeta+"%0A%0A";
	} else  if(social === "twitter") {
		alink = "https://twitter.com/intent/tweet?text="+poesia+"%0A - "+poeta+"%0A%0A"+url;
	} else if(social === "whatsapp") {
		alink = "https://api.whatsapp.com/send?text="+poesia+"%0A - "+poeta+"%0A%0A"+url;
	}
	return alink;
}
