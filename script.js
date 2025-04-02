var container = document.getElementById("source");
var more_btn = document.getElementById("more-icon");
var options = document.getElementById("more-option-bar");
var btn_div = document.getElementById("icon");
var del_btn = document.getElementById("delete");
var li = document.getElementById("first-note");

more_btn.addEventListener("click" , function(){
    options.style.display = "block";
});

del_btn.addEventListener("click" , function(){
    li.remove();
});

