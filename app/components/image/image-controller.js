function ImageController() {
	var is = new ImageService()

	function drawImage(image) {
		var imageElem = document.getElementById('body');
		imageElem.style.cssText = `background: url("${image.url}") background-size: cover; no-repeat; center`
	}
	is.getImage(drawImage)
}


