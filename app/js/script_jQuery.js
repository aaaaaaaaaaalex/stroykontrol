jQuery(function() {
	@@include('check_webp_css.js')
	@@include('slick.js')
	


	 // Modal
	 $("[data-modal]").on("click", function(event) {
		event.preventDefault();
		let modalID = $(this).data("modal");
		$(modalID).addClass("show");
		$("body").addClass("no-scroll");
	
	});
	
	$("[data-close]").on("click", function(event) {
		event.preventDefault();
		let modalParent = $(this).parents(".modal");
		modalParent.removeClass("show");
		$("body").removeClass("no-scroll");
	});
	
	$(".modal").on("click", function(event) {
		$(this).removeClass("show");
		$("body").removeClass("no-scroll");
	});
	
	$(".modal__dialog").on("click", function(event) {
		event.stopPropagation()
	});


	// Slider
	jQuery(".reviews").slick({
		dots: true,
		arrows: false
	});


	// Menu Header
	// Menu Header Toggle
	jQuery("#burger").on("click", function(event) {
		event.preventDefault();

		jQuery(this).toggleClass("active");

		jQuery("[data-menu]").each(function() {
			let MenuBlock = jQuery(this);

			if(MenuBlock.hasClass("show") == true) {
				MenuBlock.removeClass("show");
			}else{
				if(MenuBlock.css("display") == "none") {
					MenuBlock.addClass("show");
				}else{
					MenuBlock.removeClass("show");
				}
			}
			
		});
	});
	// Menu Header Hidden Resize
	jQuery(window).on("resize", function(event) {
		event.preventDefault();

		jQuery("#burger").removeClass("active");

		jQuery("[data-menu]").each(function() {
			let MenuBlock = jQuery(this);

			MenuBlock.removeClass("show");
		});
	});



	// Close Menu
	jQuery("[data-close-menu]").on("click", function(event){
		event.preventDefault();

		jQuery("#burger").removeClass("active");
		jQuery("#nav").removeClass("show");
		jQuery("#btn-order-wrap").removeClass("show");

	});
	
});