var pos1 = 0;
var pos2 = 0;
var oldpos1 = 0;
var oldpos2 = 0;

function player1(){
	var r = Math.floor(Math.random() * 6) + 1;
	document.getElementById('dice').src = r + ".png";

	if (r != 6) {
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = false;
	}

	if (pos1 == 3) { pos1 = 51; document.getElementById(3).src = "";}
	if (pos1 == 6) { pos1 = 27; document.getElementById(6).src = "";}
	if (pos1 == 20) { pos1 = 70; document.getElementById(20).src = "";}
	if (pos1 == 36) { pos1 = 55; document.getElementById(36).src = "";}
	if (pos1 == 63) { pos1 = 95; document.getElementById(63).src = "";}
	if (pos1 == 68) { pos1 = 98; document.getElementById(68).src = "";}

	if (pos1 == 25) { pos1 = 5; document.getElementById(25).src = "";}
	if (pos1 == 34) { pos1 = 1; document.getElementById(34).src = "";}
	if (pos1 == 47) { pos1 = 19; document.getElementById(47).src = "";}
	if (pos1 == 65) { pos1 = 52; document.getElementById(65).src = "";}
	if (pos1 == 87) { pos1 = 57; document.getElementById(87).src = "";}
	if (pos1 == 91) { pos1 = 61; document.getElementById(91).src = "";}
	if (pos1 == 99) { pos1 = 69; document.getElementById(99).src = "";}

	if (pos1 + r == 100) { alert("Congratulations! Abhishek has won this Game"); exit();}
	else if(pos1 + r < 100) {
		oldpos1 = pos1;
		pos1 = pos1 + r;
		document.getElementById(oldpos1).src = "";
		document.getElementById(pos1).src = "abhishek.jpg";
	}
	else{ pos1 = pos1;}

	document.getElementById('pos1').innerHTML = "Position : " + pos1;

}

function player2(){
	var r = Math.floor(Math.random() * 6) + 1;
	document.getElementById('dice').src = r + ".png";

	if (r != 6) {
		document.getElementById("btn1").disabled = false;
		document.getElementById("btn2").disabled = true;
	}

	if (pos2 == 3) { pos2 = 51; document.getElementById(3).src = "";}
	if (pos2 == 6) { pos2 = 27; document.getElementById(6).src = "";}
	if (pos2 == 20) { pos2 = 70; document.getElementById(20).src = "";}
	if (pos2 == 36) { pos2 = 55; document.getElementById(36).src = "";}
	if (pos2 == 63) { pos2 = 95; document.getElementById(63).src = "";}
	if (pos2 == 68) { pos2 = 98; document.getElementById(68).src = "";}

	if (pos2 == 25) { pos2 = 5; document.getElementById(25).src = "";}
	if (pos2 == 34) { pos2 = 1; document.getElementById(34).src = "";}
	if (pos2 == 47) { pos2 = 19; document.getElementById(47).src = "";}
	if (pos2 == 65) { pos2 = 52; document.getElementById(65).src = "";}
	if (pos2 == 87) { pos2 = 57; document.getElementById(87).src = "";}
	if (pos2 == 91) { pos2 = 61; document.getElementById(91).src = "";}
	if (pos2 == 99) { pos2 = 69; document.getElementById(99).src = "";}

	if (pos2 + r == 100) { alert("Congratulations! Elon Musk has won this Game"); exit();}
	else if(pos2 + r < 100) {
		oldpos2 = pos2;
		pos2 = pos2 + r;
		document.getElementById(oldpos2).src = "";
		document.getElementById(pos2).src = "elon.jpg";
	}
	else{ pos2 = pos2;}

	document.getElementById('pos2').innerHTML = "Position : " + pos2;

}