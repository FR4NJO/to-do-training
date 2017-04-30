let index = 0;
function showToDo() {
    if($('#to-do').val() != (null || "")){
        $('#text').append( 
            `<li id="li-${index}"> <strong id="text-${index}">` + $('#to-do').val() + `</strong>
                <button type="button" id="edit-button-${index}" onclick="editToDo(${index})">Edit</button>
                <button type="button" onclick="deleteToDo(${index})">Delete</button> 
            </li>`
        );
        // Clear Textfield for new ToDo
        $('#to-do').val('');
        index++;
    } else{
        alert('Enter a To Do');
    }
    return false;
}

function deleteToDo(number) {
    $(`#li-${number}`).remove();
}

function editToDo(number) {
    let word = $(`#text-${number}`).text();
    $(`#edit-button-${number}`).attr('disabled', true);
    $(`#text-${number}`).html( 
        `<input type="text" id="edit-${number}" value="${word}" /><button type="button" onclick="save(${number})">Save</button>`
    );
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
        $(`#text-${number}`).html(
            $(`#edit-${number}`).val()
        );
    } else {
        alert('You can not save an empty ToDo');
    }
}