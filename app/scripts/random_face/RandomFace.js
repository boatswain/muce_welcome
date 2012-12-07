define([], function() {
	var randomFace = function() {
		var r = Math.floor(Math.random()*20 + 1);
		if ( r  == 1 ) {
			$('h1').html('# Muce %');
			$('.left-eye').parent().append('<i class="icon-eye-open right-eye"></i>');
			$('#inputAccount').attr('placeholder', 'V V');
			$('#inputPassword').attr('placeholder', '-----------');
			$('i').css({
				'font-size': '100px',
				'display': 'inline-block'
			});
			$('.left-eye').css('margin-left', '95px');
			$('.right-eye').css('margin-left', '5px');
			$('#inputAccount').css({
				'width': '54px',
				'margin-left': '160px'
			});
			$('#inputPassword').css({
				'width': '94px',
				'margin-left': '140px'
			});
			$('.fail').css({
				'font-size': '20px',
				'margin-left': '250px'
			});
		} 
	}
	return randomFace();
});