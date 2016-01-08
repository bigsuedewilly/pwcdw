var a = "active";
var state = [false, null];


$(".navElements").on("click", function() 
{
	//Entering menu mode
	$("#menu").removeClass();
	state[0] = true;
	state[1] = this.id;
	$("#menu").addClass(a + " " + state[1]);
	$("#content").addClass(a);
	//alert(state[1]);

	//Need this function to be rewritten to squash a bug
	setTimeout(function addButton()
	{
		if (state[0] != false) { $("#menu img").addClass(a); }
	}, 1000);

	//Tab switching
	var menuShow = $(this).attr("rel");
	
	$(".navElements.active").not(this).removeClass(a);
	$(this).addClass(a);

});

//Exiting menu mode
$("#close, #innerContent").on("click", function() {
	$("#menu").removeClass();
	$("#menu img").removeClass(a);
	$("#content").removeClass(a);
	$(".navElements").removeClass(a);
	state[0] = false;
	state[1] = null;
});


