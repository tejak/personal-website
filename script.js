
$(document).ready(function() {


	function clearProgrammingItems(delay) {
    	$('#programming').hide(delay);
	}

	function clearDanceItems(delay) {
        $('#dancebio').hide(delay);
    	$('#danceimage').fadeOut(100);
	}

	function clearHomeItems(delay) {
    	$('#links').hide(delay);
    	$('#tag').hide(delay);
	}

	function showProgrammingItems(delay) {
		$('html').animate({
          backgroundColor: "#e1e3e4",
        }, delay );
        $('#programming').show(delay);
	}
	
	function showDanceItems(delay) {
		$('#dancebio').show(delay);
		$('html').animate({
          backgroundColor: "black",
        }, delay, function(){
			$('#danceimage').fadeIn(300);
        });
 	}

	function showHomeItems(delay) {
		$('html').animate({
          backgroundColor: "#edf4f0",
        }, delay);
        $('#links').show(delay);
    	$('#tag').show(delay);
	}

	clearProgrammingItems(0);
	clearDanceItems(0);
	showHomeItems(0);

	$('#name').click(function(){
    	clearProgrammingItems(500);
    	clearDanceItems(500);
        showHomeItems(500);
	});

	$('#programmer').click(function(){
    	clearHomeItems(500);
    	clearDanceItems(500);
    	showProgrammingItems(500);
	});

	$('#dancer').click(function(){
    	clearHomeItems(500);
    	clearDanceItems(500);
    	showDanceItems(500);
	});
	
});