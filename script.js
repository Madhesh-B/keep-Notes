var container = document.getElementById("source");
var list_container = document.getElementById("list-holder");
var more_btn = document.getElementById("more-icon");
var options = document.getElementById("more-option-bar");
var btn_div = document.getElementsByClassName("icon");
var del_btn = document.getElementById("delete");
var edit_btn = document.getElementById("edit");
var li = document.getElementById("first-note");
var add_btn = document.getElementById("new-btn");
var cancel_btn = document.getElementById("cancel-btn");
var submit_btn = document.getElementById("submit-btn");
var overlay = document.getElementById("back-drop-overlay");
var user_input_dialogbox = document.getElementById("content-dialog-box");
var title_input = document.getElementById("title-input");
var note_input = document.getElementById("note-input");

// more_btn.addEventListener("click" , function(event){
//     options.style.display = "block";
// });

del_btn.addEventListener("click" , function(event){
    var targetEl = event.target.parentNode.parentNode.parentNode;
    targetEl.remove();
});

//btn_div.addEventListener("click" , function(event){
// function moreOptions(event){
//     var elementL = event.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
//     // var elementL = event.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
//     //elementL.style.display = "block"
//     console.log(elementL);
//     // elementL.remove();
// // });
// }

function moreOptions(event){
    var elementL = event.target.closest('.more-options');
    // var elementL = event.target.closest('.list-items').querySelector('.more-options');
    elementL.style.display = 'block';  // Display the more options menu
    console.log(elementL);
}


// container.addEventListener("click" , () => {
//     options.style.display = "none";
// })

add_btn.addEventListener("click" , () =>{
    user_input_dialogbox.style.display = "flex";
    overlay.style.display = "block";
});

submit_btn.addEventListener("click" , () =>{
    var title_val = title_input.value;
    var content_val = note_input.value;
    edit_content(title_val , content_val)
})

cancel_btn.addEventListener("click" , () => {
    user_input_dialogbox.style.display = "none";
    overlay.style.display = "none";
    title_input.value = "";
    note_input.value = "";
});

function edit_content(title , content){
    var division_note = `
        <li id="list-item">
                <div class="list-items" id="first-note">
                    <div class="icon"><i class="fa-solid fa-ellipsis-vertical more" id="more-icon"></i></div>
                    <h1 id="title-bar">${title}</h1> <hr>
                    <p id="content-bar">${content}</p>
                    <div class="more-options" id="more-option-bar">
                        <p id="edit"><i class="fa-solid fa-pen"></i>Edit</p>
                        <p id="delete"><i class="fa-solid fa-trash"></i>Delete</p>
                    </div>
                </div>
         </li>
    `;
    list_container.innerHTML += division_note;
    title_input.value = "";
    note_input.value = "";
    user_input_dialogbox.style.display = "none";
    overlay.style.display = "none";

}

// submit_btn.addEventListener("click" , () => {
//     user_input_dialogbox.classList.add("display-none");
// });
