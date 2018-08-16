$( function() {
	$(".sorted_list").sortable({
		connectWith: '.sorted_list',
		placeholder: 'ui-state-highlight',
		// start: function (event, ui) {
		// 	$(ui.item[0].addClass('dragging');
		// },
		// stop: function (event, ui) {
		// 	$(ui.item[0].removeClass('dragging');
		// },
	});
		} );