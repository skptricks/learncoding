$(document).ready(function(){
     
	 var arr = ["skp","skp1","skp2","skp3","skp4"]; // List of users
	
	$('.msg_head').click(function(){		
		var chatbox = $(this).parents().attr("rel") ;
		$('[rel="'+chatbox+'"] .msg_wrap').slideToggle('slow');
		return false;
	});
	
	$('.close').click(function(){
		
		var chatbox = $(this).parents().parents().attr("rel") ;
		$('[rel="'+chatbox+'"]').hide();
		//update require
		arr.splice($.inArray(chatbox, arr),1);
		i = 50 ; // start position
		j = 260;  //next position
		$.each( arr, function( index, value ) {          
	      $('[rel="'+value+'"]').css("right",i);
		  i = i+j;
        });
		
		return false;
	});	
	
	$('textarea').keypress(
    function(e){     
	  
        if (e.keyCode == 13) {
            var msg = $(this).val();			
			$(this).val('');
			if(msg.trim().length != 0){				
			var chatbox = $(this).parents().parents().parents().attr("rel") ;
			$('<div class="msg-right">'+msg+'</div>').insertBefore('[rel="'+chatbox+'"] .msg_push');
			$('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
			}
        }
    });
	
});