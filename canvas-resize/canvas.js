var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// console.log(canvas);

// // Based on 'JPEG Raster' by Jonathan Puckey:
// // http://www.flickr.com/photos/puckey/3179779686/in/photostream/
// // Create a raster item using the image with id='lenna'
// var raster = new Raster('mona');
// // Make the raster invisible:
// raster.visible = false;
// // Create a seperate layer that the paths will be placed on:
// var layer = new Layer();
// // The mouse has to drag at least 5pt until the next onMouseDrag
// // event is fired:
// tool.minDistance = 5;
// function onMouseMove(event) {
// 	// Each drag event, iterate through the children of group:
// 	for (var i = 0; i < layer.children.length; i++) {
//  			var child = layer.children[i];
//  			var bounds = child.bounds;
//  			if (bounds.contains(event.point)) {
// 			// If the mouse position intersects with the bounding
// 			// box of the path, we're going to split it into two paths:
// 			var size = bounds.size;
// 			var isLandscape = size.width > size.height;
// 			// If the path is in landscape orientation, we're going to
// 			// split the path horizontally, otherwise vertically:
// 			if (isLandscape) {
// 				size.width /= 2;
// 			} else {
// 				size.height /= 2;
// 			}
// 			var topLeft = bounds.topLeft.floor();
// 			var path = new Path.Rectangle(topLeft, size.ceil());
// 			path.fillColor = raster.getAverageColor(path);
// 			path.insertBelow(child);
// 			var secondPath = path.clone();
// 			size = size.floor();
// 			secondPath.position += isLandscape
// 					? [size.width, 0]
// 					: [0, size.height];				
// 			secondPath.fillColor = raster.getAverageColor(secondPath);
// 			secondPath.insertBelow(path);
// 			// Remove the path which was split:
// 			child.remove();
// 			// Avoid continuing looping through the rest of the items:
// 			return;
//         }
//     }
// }
// function onResize(event) {
// 	layer.removeChildren();
// 	// Transform the raster so that it fills the bounding rectangle
// 	// of the view:
// 	raster.fitBounds(view.bounds, true);
// 	// Create a path that fills the view, and fill it with
// 	// the average color of the raster:
// 	var path = new Path.Rectangle(view.bounds);
// 	path.fillColor = raster.getAverageColor(path);
// }
// // Call onResize directly:
// onResize();