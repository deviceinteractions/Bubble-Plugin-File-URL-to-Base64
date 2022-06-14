function(instance, properties) {
	let box = $(`<div>File -> base64</div>`);
    instance.canvas.append(box);
    box.css('background-color', 'yellow');
    box.css('height', properties.bubble.height)
    box.width('width', properties.bubble.width)


}