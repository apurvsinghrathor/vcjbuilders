var imageWidthHP = 2000;
var imageHeightHP = 900;

jQuery(document).ready(function() {
	jQuery(window).resize(function(){
	  resizeImage();
	});	
	resizeImage();
});

function resizeImage() {
	var navWidth = jQuery(window).width();
	var windowheight = jQuery(window).height();
	navHeight = windowheight;
	var navRatio = navWidth / navHeight;
	imageRatio = imageWidthHP / imageHeightHP;
	if (navRatio > imageRatio) {
		var newHeight = (navWidth / imageWidthHP) * imageHeightHP;
		var newWidth = navWidth;
	} else {
		var newHeight = navHeight;
		var newWidth = (navHeight / imageHeightHP) * imageWidthHP;
	}	
	newTop = 0 - ((newHeight - navHeight) / 2);
	newLeft =  0 - ((newWidth - navWidth) / 2);
//	jQuery('#image').css({height: navHeight, width: navWidth});
//	jQuery('#wowslider-container1').css({height: newHeight, width: newWidth, top: newTop, left: newLeft});
//	jQuery('#image').css({visibility:"visible", display:"block"});
	jQuery('#image').css({height: navHeight, width: navWidth});
	jQuery('#image img').css({height: newHeight, width: newWidth, top: newTop, left: newLeft});
	jQuery('#image').css({visibility:"visible", display:"block"});
}

