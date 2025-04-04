// element variable declaration.
var list_container = document.getElementById("list-holder");
var add_btn = document.getElementById("new-btn");
var cancel_btn = document.getElementById("cancel-btn");
var submit_btn = document.getElementById("submit-btn");
var overlay = document.getElementById("back-drop-overlay");
var user_input_dialogbox = document.getElementById("content-dialog-box");
var title_input = document.getElementById("title-input");
var note_input = document.getElementById("note-input");
var content_edit_dialog_box = document.getElementById("content-edit-dialog-box");
var cancel_edit = document.getElementById("cancel");
var replace_edit = document.getElementById("replace-btn");

//To display the needed dialog box
add_btn.addEventListener("click" , () =>{
    user_input_dialogbox.style.display = "flex";
    overlay.style.display = "block";
});

//To add the List into the ul
submit_btn.addEventListener("click" , () =>{
    var title_val = title_input.value;
    var content_val = note_input.value;
    if(title_val != "" && content_val != ""){
        edit_content(title_val , content_val);
    }
    if(title_val == ""){
        if(content_val == ""){
            edit_content("No Title" , "No Content")
        }
        else{
            edit_content("No Title" , content_val)
        } 
    }
    else if(content_val == ""){
        edit_content(title_val , "No Content")
    } 
})

// block to perform cancel operation.
function cancelOperation(box){
    box.style.display = "none";
    overlay.style.display = "none";
    title_input.value = "";
    note_input.value = "";
}

//To close the dialog box in add section.
cancel_btn.addEventListener("click" , () => {
    cancelOperation(user_input_dialogbox);
});
//To close the dialog box in edit section.
cancel_edit.addEventListener("click" , () => {
    cancelOperation(content_edit_dialog_box);
});

// To add functionality to sub_btn()
var count = 1;
function edit_content(title , content){
    var division_note = `
        <li id="list-item-${count}">
                <div class="list-items" id="note-${count}">
                    <div class="icon"><i class="fa-solid fa-ellipsis-vertical more" id="more-icon-${count}"></i></div>
                    <h1 class="title" id="title-bar-${count}">${title}</h1> <hr>
                    <p class="note-bar" id="content-bar-${count}">${content}</p>
                    <div class="more-options" id="more-option-bar-${count}">
                        <p id="edit-${count}"><i class="fa-solid fa-pen"></i>Edit</p>
                        <p id="delete-${count}"><i class="fa-solid fa-trash"></i>Delete</p>
                    </div>
                </div>
         </li>
    `;
    count++;
    list_container.innerHTML += division_note;
    title_input.value = "";
    note_input.value = "";
    user_input_dialogbox.style.display = "none";
    overlay.style.display = "none";

};

//To open the more option dialog box , delete the list items and editing the value.
var event_recieve = 0;
document.addEventListener("click",(event)=>{
    var chkEl = event.target.getAttribute("id")
    for(var i = 0;i <= count ; i++){
        if(chkEl == `more-icon-${i}`){
            var elementL = event.target.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling;
            elementL.style.display = "block"
            break;
        }
        else if(chkEl == `delete-${i}`){
            var targetEl = event.target.parentNode.parentNode.parentNode;
            targetEl.remove();
            break;
        }
        else if(chkEl == `edit-${i}`){
            var elementL = event.target.parentNode.previousSibling.previousSibling;
            overlay.style.display = "block";
            content_edit_dialog_box.style.display = "flex";
            event.target.parentNode.style.display = "none";
            var title_edit = document.getElementById("title-edit");
            var note_edit = document.getElementById("note-edit");
            note_edit.value = elementL.textContent;
            var elementL = event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
            title_edit.value = elementL.textContent;
            event_recieve = i;
            break;
        }
        else if(chkEl == "list-holder"){
            for(let j = 0; j <= count ;j++){
                document.getElementById(`more-option-bar-${j}`).style.display = "none";
            }
            break;
        }   
    } 
});

//to replace the text in the existing div list.
replace_edit.addEventListener("click" , () =>{
    var title_edit = document.getElementById("title-edit").value;
    var note_edit = document.getElementById("note-edit").value;
    document.getElementById(`title-bar-${event_recieve}`).innerHTML = title_edit;
    document.getElementById(`content-bar-${event_recieve}`).innerHTML = note_edit;
    title_edit.value = "";
    note_edit.value = "";
    cancelOperation(content_edit_dialog_box);
});
