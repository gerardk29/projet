/* JS */
console.log("hello") ;

var img1 = document.getElementsById("img1");
var img2 = document.getElementsById("img2");
var img3 = document.getElementsById("img3");
var img4 = document.getElementsById("img4");
var img5 = document.getElementsById("img5");
var img6 = document.getElementsById("img6");
var img7 = document.getElementsById("imgfinal");

var imageActive = false; 

var buttonImage = document.getElementById("button");


buttonImage.addEventListener(click,function(){
	imageActive = true;

	if (imageActive == img1){
		imageActive = img2;
	}
	if (imageActive == img2){
		imageActive = img3;
	}
	if (imageActive == img3){
		imageActive = img4;
	}
	if (imageActive == img4){
		imageActive = img5;
	}
	if (imageActive == img5){
		imageActive = img6;
	}
	if (imageActive == img6){
		imageActive = imgfinal;
	}
	if (imageActive == imgfinal){
		imageActive = img1;
	}
});
