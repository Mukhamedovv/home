 $(function(){
         $('.ss').on('click',function(){
             $('nav').slideToggle()
       })
    
         $(window).resize(function(){
            if($(window).width() > 991){
                $('nav ul').removeAttr('style');
            }
    })
        
    
       
     })
     
     
    $(function () {
        $('.ag').on('click', function () {
            $('.hg').fadeOut(500);
        })
    })