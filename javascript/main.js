let index = 0;
function showToDo() {
    if($('#to-do').val() != (null || "")){
        $('#text').append( 
            `
            <div id="div-${index}">
                <input type="checkbox" id="check-${index}" onclick="checkCheckbox(${index})" />
                <font id="text-${index}">` + $('#to-do').val() + `</font>
                <button type="button" id="edit-button-${index}" onclick="editToDo(${index})">Edit</button>
                <button type="button" onclick="deleteToDo(${index})">Delete</button> 
            </div>
            <hr id="hr-${index}">
            `
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
    $(`#div-${number}`).remove();
    $(`#hr-${number}`).remove();
}

function checkCheckbox(number) {
    if($(`input#check-${number}`).prop('checked') == true) {
        $(`font#text-${number}`).css('text-decoration', 'line-through');
    }

    else {
        $(`font#text-${number}`).css('text-decoration', 'none');
    }
}

function editToDo(number) {
    let word = $(`#text-${number}`).text();
    $(`font#text-${number}`).css('text-decoration', 'none');
    $(`#edit-button-${number}`).attr('disabled', true);
    $(`input#check-${number}`).attr('disabled', true);
    $(`#text-${number}`).html( 
        `<input type="text" id="edit-${number}" value="${word}" />
         <button type="button" onclick="save(${number})">Save</button>
        `
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
        $(`input#check-${number}`).attr('disabled', false);
        $(`#text-${number}`).html(
            $(`#edit-${number}`).val()
        );
        $(`font#text-${number}`).css('text-decoration', (($(`input#check-${number}`).prop('checked') == true) ? 'line-through' : 'none'));
    } else {
        alert('You can not save an empty ToDo');
    }
}