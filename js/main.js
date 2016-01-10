var a = "active";
var state = [false, null];
var links = ["/whatever1", "/whatever2", "/whatever3"];
var buttons = ["/btn1.png", "/btn2.png", "/btn3.png"];

function drawButtons(buttons) 
{
	setTimeout(function drawButtons()
	{
		var count = 0;
		/*
		while (count < links.length)
		{

			div.append(<img src = "buttons[x]" onclick=location.href = 'links[x]';")
			count++;
		}
		*/
	}, 1000);
}

$(".navElements").on("click", function() 
{
	//Entering menu mode
	$("#menu").removeClass();
	state[0] = true;
	state[1] = this.id;
	$("#menu").addClass(a + " " + state[1]);
	$("#content").addClass(a);
	//alert(state[1]);

	setTimeout(function addButton()
	{
		if (state[0] != false) { $("#menu img").addClass(a); }
	}, 1000);

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


