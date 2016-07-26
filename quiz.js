$(document).ready(function() 
{    $("#results").click(function() {     

var cat1=$("input[name='q1']:checked").val();       


if (cat1=="a"){
	alert("White mold, or Diplodia, is the most harmless of them all! It is safe to eat with the mold, but just cut it off if you prefer.");
}       
else if (cat1=="b"){
	alert("Gray-brown and fuzzy mold, or Botrytis, apart from being a bit icky, this will do you no harm. It is the bacteria that makes sweet dessert wine after all! Just chop it off and enjoy your cheese.");
}
else if (cat1=="c"){
	alert("Turquoise mold, or Penicillium, is a blue and white mold that makes blue cheese and penicillin, and make lemons and bread moldy. In ancient times, soldiers took this moldy bread with them on campaigns to prevent infection from war wounds. It is harmless but cut it off before enjoying your cheese if you prefer.");
}
else if (cat1=="d"){
	alert("Black mold, or Aspergillius niger, can make you sick so throw it away just to be sure!");
}  
else {
	alert("Pink, Red or Purple mold, or Fusarium and Gibberella - Eek, NOT good! Especially if this is slimy do NOT breathe this in and get rid of the cheese ASAP.");
}    
});
});