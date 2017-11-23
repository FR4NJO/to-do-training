let index = 0;
function showToDo() {
    if($('#to-do').val().trim() != (null || "")){
        $('#text').append( 
            `
            <div id="div-${index}">
                <div class="ui checkbox">
                    <input class="ui checkbox" type="checkbox" id="check-${index}" onclick="checkCheckbox(${index})" />
                    <label id="text-${index}" class="word-wrap">` + $('#to-do').val() + `</label>
                </div>
                <div class="center aligned content top-space">
                    <i class="blue large edit icon" id="edit-button-${index}" onclick="editToDo(${index})" style="display: inline;"></i>
                    <i class="red large trash icon" id="delete-button-${index}" onclick="deleteToDo(${index})" style="display: inline;"></i>
                </div>
            </div>
            <div class="ui divider" id="hr-${index}"></div>
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

function deleteAllToDos() {
    $('#text').html('');
}

function checkCheckbox(number) {
    if($(`input#check-${number}`).prop('checked') == true) {
        $(`label#text-${number}`).css('text-decoration', 'line-through');
    }

    else {
        $(`label#text-${number}`).css('text-decoration', 'none');
    }
}

function editToDo(number) {
    let word = $(`#text-${number}`).text();
    $(`label#text-${number}`).css('text-decoration', 'none');
    $(`#edit-button-${number}`).css('display', 'none');
    $(`#delete-button-${number}`).css('display', 'none');
    $(`input#check-${number}`).prop('disabled', true);
    // FIND SOLUTIONN FOR INPUT FIELD REPLACE IN CHECKBOX LABEL
    $(`#text-${number}`).html( 
        `<div class="ui transparent input">
            <input type="text" class="ui input" id="edit-${number}" value="${word}" />      
            <i class="green large check circle icon" onclick="save(${number})"></i>
            <i class="red large remove circle icon" onclick='cancel(${number}, "${word}")'></i>
         </div>
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
    if($(`#edit-${number}`).val().trim() != (null || "")) {
        $(`#edit-button-${number}`).css('display', 'inline');
        $(`#delete-button-${number}`).css('display', 'inline');
        $(`input#check-${number}`).prop('disabled', false);
        $(`label#text-${number}`).html(
            $(`#edit-${number}`).val()
        );
        $(`label#text-${number}`).css('text-decoration', (($(`input#check-${number}`).prop('checked') == true) ? 'line-through' : 'none'));
    } else {
        alert('You can not save an empty ToDo');
    }
}

function cancel(number, word) {
    $(`#edit-button-${number}`).css('display', 'inline');
    $(`#delete-button-${number}`).css('display', 'inline');
    $(`input#check-${number}`).prop('disabled', false);
    $(`label#text-${number}`).html(word);
    $(`label#text-${number}`).css('text-decoration', (($(`input#check-${number}`).prop('checked') == true) ? 'line-through' : 'none'));
}