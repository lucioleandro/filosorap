//update this with your js_form sel1ector
var form_id_js = document.getElementById("form-punch");

var data_js = {
    "access_token": ""
};

var sendButton = document.getElementById("send");

function js_send() {
    sendButton.value='Sending…';
    sendButton.disabled=true;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (request.readyState == 4 && request.status == 200) {
            alert("Sua contribuição foi enviada, analisaremos e se essa punch line" +
            " for pesadissima irar entrar em nosso arquivo.");
            location.reload();
        } else
        if(request.readyState == 4) {
            alert("Algo de errado aconteceu!");
        }
    };

    var name = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("punch-line").value;
    data_js['subject'] = name + " - " + email;
    data_js['text'] = message;
    var params = toParams(data_js);
    request.open("POST", "https://postmail.invotes.com/send", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send(params);
    return false;
}

sendButton.onclick = js_send;

function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }
    return form_data.join("&");
}

var js_form = document.getElementById(form_id_js);
js_form.addEventListener("submit", function (e) {
    e.preventDefault();
});
