
$(document).ready(function() {


	function clearProgrammingItems(delay) {
    	$('#programming').hide(delay);
	}

	function clearDanceItems(delay) {
        $('#dancebio').hide(delay);
        $('#danceevents').hide(delay);
        $('#dancemenu').hide(delay);
    	$('#dancepinkimage').fadeOut(100);
      	$('#danceblueimage').fadeOut(100);
	}

	function clearHomeItems(delay) {
    	$('#links').hide(delay);
    	$('#tag').hide(delay);
    	$('#back-button').show(delay);
	}

	function showProgrammingItems(delay) {
		$('html').animate({
          backgroundColor: "#e1e3e4",
        }, delay );
        $('#programming').show(delay);
	}
	
	function showDanceItems(delay) {
        $('#dancemenu').show(delay);
		$('#dancebio').show(delay);
		$('html').animate({
          backgroundColor: "black",
        }, delay, function(){
			$('#dancepinkimage').fadeIn(300);
        });
 	}

	$("#eventsmenuitem").click(function(){
		$('#dancepinkimage').fadeOut(300);
		$('#danceblueimage').fadeIn(300);
		$('#danceevents').show(300);
		$('#dancebio').hide(300);
	});

	$("#biomenuitem").click(function(){
		$('#dancepinkimage').fadeIn(300);
		$('#danceblueimage').fadeOut(300);
		$('#danceevents').hide(300);
		$('#dancebio').show(300);
	});

	function showHomeItems(delay) {
		$('html').animate({
          backgroundColor: "#edf4f0",
        }, delay);
        $('#links').show(delay);
    	$('#tag').show(delay);
       	$('#back-button').hide(delay);
	}

	clearProgrammingItems(0);
	clearDanceItems(0);
	showHomeItems(0);

	$('#name').click(function(){
    	clearProgrammingItems(500);
    	clearDanceItems(500);
        showHomeItems(500);
	});

	$('#back-button').click(function(){
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