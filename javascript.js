var description = document.getElementById("button_click_description");
var count = 0;
function showhidelist(){
    count = count + 1;
    if (count%2 != 0){
        description.style.display = "flex";
    }
    else{
        description.style.display = "none";
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
    
