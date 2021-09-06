
var count = 0;
function showhidelist(button_id){
    count = count + 1;
    var btn = document.getElementById(button_id);
    var description = document.getElementById(button_id+"_description");
    if (count%2 != 0){
        description.style.display = "flex";
        btn.style.background = "#FEF5E5";
        btn.style.color = "#EB9F24";
        btn.style.borderBottom = "#EB9F24 2px solid";
    }
    else{
        description.style.display = "none";
        btn.style.background = "white";
        btn.style.color = "#626262";
        btn.style.borderBottom = " #626262 2px solid";
    }
    
}
var legal = document.getElementById("legal");
function dispay(){
  legal.innerHTML = "Legal";
}

function changeImage(img_id) {
    var image = document.getElementById(img_id);
    if (image.src.match("Assets/love_grey.png")) {
      image.src = "Assets/love_red.png";
    } else {
      image.src = "Assets/love_grey.png";
    }
  }
  function toggle_menu() {
    var x = document.getElementById("header__links");
    if (x.style.display === "none") {
       x.style.cssText = 'display:flex !important';
    } else {
      x.style.display = "none";
    }
  }
    
