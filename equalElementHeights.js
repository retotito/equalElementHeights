
	$(document).ready(function(){
		set_heights_equal();
		$(".equalHeightElement").load(function() {
			set_heights_equal();
		});
	});

	$(".equalHeightElement").ready(function() {
		set_heights_equal();
	});

	$( window ).resize(function() {
	  set_heights_equal();
	});

	function set_heights_equal () {
		$(".equalHeightElement").css({"height":"300px"});  // set all to same height
		//console.log('test');
		var top_positions = [];
		$(".equalHeightElement").each(function(){
			var this_top_position = $(this).position().top;
			if($.inArray(this_top_position, top_positions , 0 ) === -1) {
				top_positions.push(this_top_position);  // collect numbers for each top position
			}
			$(this).attr('row_number',this_top_position);  // set row number to element
		});
		$(".equalHeightElement").css({"height":"auto"});  // set height to auto

		$.each( top_positions, function( index, value ){  // loop rows
			var largest_height = 0;
			$('.equalHeightElement[row_number="'+value+'"]').each(function() {  // find heighest element
				if ($( this ).height() > largest_height) {
					largest_height = $( this ).height();
				}
		});
		$('.equalHeightElement[row_number="'+value+'"]').height(largest_height);  // set heighest height to all of row
	});
	}
