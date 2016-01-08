var a = "active";


$(".navElements").on("click", function() 
{
	//Entering menu mode
	
	$("#menu").addClass(a);
	$("#content").addClass(a);

	//Need this function to be rewritten to squash a bug
	setTimeout(function addButton()
	{
		$("#menu img").addClass(a);
	}, 1000);

	//Tab switching
	var menuShow = $(this).attr("rel");
	
	$(".navElements.active").not(this).removeClass(a);
	$(this).addClass(a);

});

//Exiting menu mode
$("#close, #innerContent").on("click", function() {
	$("#close").removeClass(a);
	$("#menu").removeClass(a);
	$("#content").removeClass(a);
	$(".navElements").removeClass(a);
});



