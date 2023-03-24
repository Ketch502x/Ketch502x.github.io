var downloadButton = document.getElementById("download");
var counter = 5;
var newElement = document.createElement("p");
newElement.innerHTML = "<b>5 segundos para descargar.</b>";
var id;

downloadButton.parentNode.replaceChild(newElement, downloadButton);

function startDownload() {
	this.style.display = 'none';
	id = setInterval(function () {
    	counter--;
    	if (counter < 0) {
        	newElement.parentNode.replaceChild(downloadButton, newElement);
        	clearInterval(id);
    	} else {
        	newElement.innerHTML = +counter.toString() + " <b> segundos para descargar.</b>";
    	}
	}, 1000);
};

var clickbtn = document.getElementById("btn");
clickbtn.onclick = startDownload;