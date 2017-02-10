
 var array=["HOME","ABOUT","WORK","LEARN","BLOG","MEMBERS","CONNECT"];
 var object= new Object(); 
 object.information=array;

 window.onload = function(){
 document.getElementById("home").innerHTML    = object.information[0];
 document.getElementById("about").innerHTML   = object.information[1];
 document.getElementById("work").innerHTML    = object.information[2];
 document.getElementById("learn").innerHTML   = object.information[3];
 document.getElementById("blog").innerHTML    = object.information[4];
 document.getElementById("members").innerHTML = object.information[5];
 document.getElementById("connect").innerHTML = object.information[6];
 }

 function displayTime(){
 
  var date = new Date();
  var time=date.toLocaleTimeString();
  document.getElementById("clock").innerHTML=time;
 }

setInterval(displayTime,1000);

 function makeCapital(){
    var name = document.getElementById("name");
    name.value=name.value.toUpperCase();
}

 function validateForm(){

    var number = document.forms["myForm"]["mobile"].value;
	var name =   document.forms["myForm"]["name"].value;
    var length=number.length;
	if(name==""){
	alert("give name properly");
	return false;
	}

    if (length !=10) {
        alert("number is not valid");
        return false;
    }
}


