$(':button').on('click', function() {
    var todo = $(':text').val();
    addToDo(todo);
    (':text').val('');
});

function addToDo(todo) {
    $('#todolist').prepend('<li>'+todo+'</li>');
    $('ul li:first').on('click', function() {$(this).remove();});
}
