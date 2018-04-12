// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require jquery_ujs
//= require turbolinks


$(document).ready(function(){
	var productVideoIds = [];
	Cookies.set("productVideoIds",productVideoIds);
	$(document).on('change', '.downloadCheckBox', function() {
		  var productId = parseInt($(this).val());
		  productVideoIds = eval(Cookies.get("productVideoIds"));
	    if(this.checked) {
	      // checkbox is checked
	      productVideoIds.push(productId)
	      Cookies.set("productVideoIds",productVideoIds);
	      console.log(true)
	    }
	    else
	    {
			productVideoIds.splice($.inArray(productId, productVideoIds), 1);
	      	Cookies.set("productVideoIds",productVideoIds);
	    	console.log(false)
	    }
	    var updateProductIds = eval(Cookies.get("productVideoIds"));
	    console.log(updateProductIds);

	});
})