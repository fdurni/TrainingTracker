/**
 * Created by felic on 5/8/2016.
 */
$(document).ready(function(){
    var deleteButton = $('.delete_button');

    $(deleteButton).click(function(){

        var routineId = $("#routine").val();

        $.post('deleteRoutine', {
            routineId : routineId
        }, function(response) {
            window.location.href = 'viewPrograms';
        });
    });
});