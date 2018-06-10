
$(document).ready(function() {
	$("#plane-slide").click(function() {
	$("#plane-slide").slideToggle("slow");
	});
});

$(document).ready(function() {
    $("#hide").click(function() {
    	$("p").hide();
    });
   
});

$(document).ready(function() {
	$("#show").click(function() {
		$("p").show();
	});
});

$(document).ready(function() {
	$("#magic").click(function() {
		$("#travel-animate").animate({
			left: '250px',
			opacity: '0.5',
			height: '150px',
			width: '150px'
		});
	});
});




$(document).ready(function() {
	$("#whoop").click(function() {
		$(".articlePics").animate({
			left:'250px',
			opacity: '0.5',
			height: '200px',
			width: '200px'
		});
	});
});

$(document).ready(function() {
	$("#chain").click(function() {
		$("#p1").css("color","blue").slideUp(2000).slideDown(2000);
	});
});

$(document).ready(function() {
	$("#touch").click(function() {
		$("#mainPic").slideUp(2000).slideDown(2000);
	});
});











