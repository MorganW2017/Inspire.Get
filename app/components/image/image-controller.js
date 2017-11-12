function ImageController() {
	var is = new ImageService()

	function drawImage(image) {
		console.log(image)
		var imageElem = document.getElementById('body');
		document.body.style.backgroundImage = `url("${image.url}")`
	}
	is.getImage(drawImage)
}


