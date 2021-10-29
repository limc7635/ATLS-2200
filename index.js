let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let images = ["Sunday.jpeg", "Monday.jpeg", "Tuesday.jpeg","Wednesday.jpeg","Thursday.jpeg","Friday.jpeg","Saturday.jpeg"];
let prevday;

for (i=0; i<document.getElementsByClassName("day").length; i++){
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i]; + "</h2>";

  document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);

  document.getElementsByClassName("day")[i].id = days[i];

//  document.getElementsById("one").addEventListener('click', setActiveButton, false);
  //document.getElementsById("two").addEventListener('click', setActiveButton, false);
}

document.getElementById('Sunday').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src='assets/" + images[0] + "' >";

function setActive(e){


  prevday = document.getElementsByClassName("active")[0].id;
  if(prevday != undefined){
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday + "list").style.display = "none";
  }


  //console.log("previous task: " + prevtask);
  //prevtask.classList.toggle('active');

  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
  }else{
    e.target.classList.toggle("active");
  }

  var day = document.getElementsByClassName('active')[0].id;
  //console.log(day);
  document.getElementById('image').innerHTML = "<img src='assets/" + day + ".jpeg' >";
  document.getElementById(prevday + "list").style.display = "none";
  document.getElementById(day + "list").style.display = "block";
}

//function setActiveButton(e){
//  e.target.classList.toggle("active");
//}
