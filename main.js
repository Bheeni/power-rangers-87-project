
var canvas = new fabric.Canvas('my_canvas')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

block_Image_object= "";

function new_image(get_image)
{
fabric.Image.fromURL(get_image, function(Img) {
	block_Image_object = Img;
	block_Image_object.scaleToWidth(block_image_width);
	block_Image_object.scaleToHeight(block_image_height);
block_Image_object.set({
	top:block_y,
	left:block_x
});
canvas.add(block_Image_object);
});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	block_x = 100;
	new_image('rr1.png');
	console.log("r");
	{
		// upload red ranger
	}
	if(keyPressed == '71')
	{
		block_x = 250;
		new_image('gr.png');
		console.log("g");	}
	
	if(keyPressed == '89')
	{
		block_x =400;
		new_image('yr.png');
		console.log("y");	}

	if(keyPressed == '80')
	{
		block_x = 600;
new_image('pr.png');
	console.log("p");	}

	if(keyPressed == '66')
	{
		block_x = 700;
new_image('br.png');
	console.log("b");	}
	
}

