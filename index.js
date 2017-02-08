
$(document).ready( function(){
    $('#change-color').click(function(){
        $('body').css("background-color","red");
    });
    
    
    $('#submit-name').click(function() {
        var name=$('#name').val();
        $('#greeting').html("Hi "+ $('#name').val());
    });
    
    $('.gallery-thumb').click(function() {
        $('#gallery-main').attr('src','#gallery-thumb')
    }


    
    

    
    
    
});

