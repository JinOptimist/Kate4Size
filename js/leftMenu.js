$(document).ready(function(){
	$('.link-name').click(function(){
		$('.link-group').hide();
		$(this)
		.closest(".link")
		.find(".link-group")
		.show()
	});
	
	$('.link-fly .icon.close').click(function(){			
		$('.link-group').hide();
	});	
});