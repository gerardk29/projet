/* JS */
console.log("hello") ;

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("imgfinal");

var imageActive = img1; 

var buttonImage = document.getElementById("button");


buttonImage.addEventListener("click",function(){
	console.log("ok");
	


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
