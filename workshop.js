/* global $ */

$(document).ready(function() {
    updateCounter();  // shows counter on load
    
    function updateCounter(event) {
        var $remaining = ($('textarea').attr('maxlength')) - ($("#the-textarea").val().length);
        $('#character-counter').text($remaining);
        
        $('span').removeClass('red').removeClass('yellow').removeClass('green');
        if ($remaining > ($('textarea').attr('maxlength') * 0.2)) {
            $('span').addClass('green');
        }
        else if ($remaining < ($('textarea').attr('maxlength') * 0.1)) {
            $('span').addClass('red');
        }
        else {
            $('span').addClass('yellow');
        }
    }
    
    $("#the-textarea").keydown(updateCounter).keyup(updateCounter);
});
    