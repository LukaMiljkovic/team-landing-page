let menuBtn = document.getElementById("menuBtn");
let innerLinks = document.getElementById("innerLinks");


$(menuBtn).click(function(){
    let img = menuBtn.getAttribute("src");
    $(innerLinks).slideToggle();
    if(img == "./img/menu.png"){
        menuBtn.setAttribute("src", "./img/menu-close.png");
    }else{
        menuBtn.setAttribute("src", "./img/menu.png");
    }
    innerLinks.style.display = "flex";
  });