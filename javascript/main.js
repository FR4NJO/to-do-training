let index = 0;
function showToDo() {
    if(document.getElementById('to-do').value != (null || "")){
        document.getElementById('text').innerHTML += 
        `<li id="${index}"> <strong id="text-${index}">` + document.getElementById('to-do').value + `</strong>
            <button type="button" id="edit-button-${index}" onclick="editToDo(${index})">Edit</button>
            <button type="button" onclick="deleteToDo(${index})">Delete</button> 
        </li>`;
        // Clear Textfield for new ToDo
        document.getElementById('to-do').value = '';
        index++;
    } else{
        alert('Enter a To Do');
    }
    return false;
}

function deleteToDo(number) {
    document.getElementById(`${number}`).outerHTML = '';
}

function editToDo(number) {
    let word = $(`#text-${number}`).text();
    $(`#edit-button-${number}`).attr('disabled', true);
    document.getElementById(`text-${number}`).innerHTML = 
    `<input type="text" id="edit-${number}" value="${word}" /><button type="button" onclick="save(${number})">Save</button>`;
    $(`#edit-${number}`).keypress(function (e) {
        var key = e.which;
        if(key == 13) {
            save(number);
        }
    });   
}

function save(number) {
    if($(`#edit-${number}`).val() != (null || "")) {
        $(`#edit-button-${number}`).attr('disabled', false);
        document.getElementById(`text-${number}`).innerHTML = $(`#edit-${number}`).val();
    } else {
        alert('You can not save an empty ToDo');
    }
}