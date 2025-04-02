var container = document.getElementById("source");
var list_container = document.getElementById("list-holder");
var more_btn = document.getElementById("more-icon");
var options = document.getElementById("more-option-bar");
var btn_div = document.getElementById("icon");
var del_btn = document.getElementById("delete");
var li = document.getElementById("first-note");
var add_btn = document.getElementById("new-btn");
var cancel_btn = document.getElementById("cancel-btn");
var submit_btn = document.getElementById("submit-btn");
var overlay = document.getElementsByClassName("over-lay");
var user_input_dialogbox = document.getElementsByClassName("content-display-dialog-box");
var title_input = document.getElementsByClassName("title-input");
var note_input = document.getElementsByClassName("note-input");

more_btn.addEventListener("click" , function(){
    options.style.display = "block";
});

del_btn.addEventListener("click" , function(event){
    var targetEl = event.target.parentNode.parentNode.parentNode;
    targetEl.remove();
});

cancel_btn.addEventListener("click" , () => {
    user_input_dialogbox.style.display = "none";
    overlay.style.display = "none";
});

add_btn.addEventListener("click" , () =>{
    user_input_dialogbox.style.display = "block";
    overlay.style.display = "block";
});

submit_btn.addEventListener("click" , () => {
    var title_val = title_input.value;
    var content_val = note_input.value;
    var division_note = `
        <li id="list-item">
                <div class="list-items" id="first-note">
                    <div class="icon"><i class="fa-solid fa-ellipsis-vertical more" id="more-icon"></i></div>
                    <h1 id="title-bar">${title_val}</h1> <hr>
                    <p id="content-bar">${content_val}</p>
                    <div class="more-options" id="more-option-bar">
                        <p id="edit"><i class="fa-solid fa-pen"></i>Edit</p>
                        <p id="delete"><i class="fa-solid fa-trash"></i>Delete</p>
                    </div>
                </div>
         </li>
    `;
    // list_container.append(division_note);
    list_container.innerHTML += division_note;
});
