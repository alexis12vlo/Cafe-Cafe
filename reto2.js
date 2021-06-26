window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 30) {
  	document.getElementById("a").style.color = "#CE6D06";
  	document.getElementById("a2").style.color = "#3F3A64";
  	document.getElementById("a3").style.color = "#3F3A64";
  	document.getElementById("a4").style.color = "#3F3A64";
  	document.getElementById("a5").style.color = "#3F3A64";
  	document.getElementById("logo2").style.color = "#3F3A64";
    document.getElementById("hader1").style.top = "0";
    document.getElementById("hader1").style.backgroundColor = "white";

    
  } else {
  	document.getElementById("a").style.color = "#FFFFFF";
  	document.getElementById("a2").style.color = "#FFFFFF";
  	document.getElementById("a3").style.color = "#FFFFFF";
  	document.getElementById("a4").style.color = "#FFFFFF";
  	document.getElementById("a5").style.color = "#FFFFFF";
  	document.getElementById("logo2").style.color = "#FFFFFF";
  document.getElementById("hader1").style.backgroundColor = "transparent";  document.getElementById("navbar").style.top = "0px";
  
  }
}
function mostrar() {
		document.getElementById("menures1").style.display ='flex';
		document.getElementById("menuicon").style.display ='none';
		document.getElementById("menuicon2").style.display ='flex';

	

	}
	document.getElementById("menuicon").onclick=function(){
		mostrar();
	}
	function ocultar() {
		document.getElementById("menures1").style.display ='none';
		document.getElementById("menuicon").style.display ='flex';
		document.getElementById("menuicon2").style.display ='none';	
	}
	document.getElementById("menuicon2").onclick=function(){
		ocultar();
	}
function cambiar1(){

	document.getElementById("container1").style.backgroundImage ='url(img/[wp.w3layouts.com][13]blog4.jpg)';

}
document.getElementById('botoncambio').onclick=function(){
		cambiar1();
	}
function cambiar2(){
	
	document.getElementById("container1").style.backgroundImage ='url(img/[wp.w3layouts.com][103]banner3.jpg)';

}
document.getElementById('botoncambio').onclick=function(){
		cambiar2();
	}
function cambiar3(){
	
	document.getElementById("container1").style.backgroundImage ='url(img/[wp.w3layouts.com][212]3.jpg)';

}
document.getElementById('botoncambio').onclick=function(){
		cambiar3();
	}
function cambiar4(){
	
	document.getElementById("container1").style.backgroundImage ='url(img/[wp.w3layouts.com][345]blog5-768x511.jpg)';

}
document.getElementById('botoncambio').onclick=function(){
		cambiar4();
	}




var slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("container1con");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}