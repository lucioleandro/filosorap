var botaoTwitter = document.getElementById("botaoTwitter");
var botaoFacebook = document.getElementById("botaoFacebook");

botaoTwitter.addEventListener("click", function() {
	let alink = montaLink("twitter");
	window.open(alink);
});

botaoFacebook.addEventListener("click", function() {
	let alink = montaLink("facebook");
	window.open(alink);
});

function montaLink(social) {
	let url = window.location.href;
	let poesia = document.getElementById("estrofe").textContent;
	let poeta = document.getElementById("poeta").textContent;
	let alink = ""
	if(social === "facebook") {
		url = "www.filosorap.com.br"
		alink = "https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F"+url+
		"&quote="+poesia+"%0A - "+poeta+"%0A%0A";
	} else  if(social === "twitter"){
		alink = "https://twitter.com/intent/tweet?text="+poesia+"%0A - "+poeta+"%0A%0A"+url;
	}
	return alink;
}
