function darkTheme() {
    document.querySelector('body').style.backgroundColor = "#232B2B";
    document.querySelector('body').style.color = "white";
    document.getElementById('night-icon').style.display = "none";
    document.getElementById('sun-icon').style.display = "block";
    document.getElementById('heading').style.color = "white";
}

function lightTheme() {
    document.querySelector('body').style.backgroundColor = "white";
    document.querySelector('body').style.color = "#232B2B";
    document.getElementById('sun-icon').style.display = "none";
    document.getElementById('night-icon').style.display = "block";
    document.getElementById('heading').style.color = "black";
}

function getCar() {
  let carname = document.getElementById('search').value;
  let carnameCase = carname.toUpperCase();
  if(carnameCase == "MERCEDES") {
    document.getElementById('carName').innerHTML = "MERCEDES";
}else if(carnameCase == "BMW") {
    document.getElementById('carName').innerHTML = "BMW";
}else if(carnameCase == "TESLA") {
    document.getElementById('carName').innerHTML = "TESLA";
}else if(carnameCase == "SUZUKI") {
    document.getElementById('carName').innerHTML = "SUZUKI";
}else if(carnameCase == "TOYOTA") {
    document.getElementById('carName').innerHTML = "TOYOTA";
}else if(carnameCase == "HYUNDAI") {
    document.getElementById('carName').innerHTML = "HYUNDAI";
}
}

function throwCar() {
    if(document.getElementById("mercedes").click || carname == "MERCEDES" ){
        document.getElementById("carName").innerHTML = 'MERCEDES';
        document.getElementById("benz-containers").style.display = "";
        document.getElementById("BMW-containers").style.display = "none";
      }
}

function throwCar2() {
    if(document.getElementById("bmw").click || carname == "BMW"){
        document.getElementById("carName").innerHTML = 'BMW';
        document.getElementById("benz-containers").style.display = "none";
        document.getElementById("BMW-containers").style.display = "flex";
      }
  }

  
function throwCar3() {
    if(document.getElementById("tesla").click){
        document.getElementById("carName").innerHTML = 'TESLA'
      }
  }

  
function throwCar4() {
    if(document.getElementById("suzuki").click){
        document.getElementById("carName").innerHTML = 'SUZUKI'
      }
  }

  
function throwCar5() {
    if(document.getElementById("toyota").click){
        document.getElementById("carName").innerHTML = 'TOYOTA'
      }
  }

  
function throwCar6() {
    if(document.getElementById("hyundai").click){
        document.getElementById("carName").innerHTML = 'HYUNDAI'
      }
  }