(function($) {

	$( "div.btn-google" ).click(function() {
		var chemialTW = $("#chemialTW").val();
		var chemialEN = $("#chemialEN").val();
		var casNo = $("#casNo").val();
		var w = $("#w").val();
		var v = $("#v").val();
		var m = $("#m").val();
		var MF = $("#MF").val();
		var pioneer = "";
		var poison = "";
		var priority = "";
		if($("#pioneer").prop("checked")){
			pioneer = $("#pioneer").val();
		}
		if($("#poison").prop("checked")){
			poison = $("#poison").val();
		}
		if($("#priority").prop("checked")){
			priority = $("#priority").val();
		}
		
		console.log(chemialTW+"\n"+chemialEN
							+"\n"+casNo
							+"\n"+w
							+"\n"+v
							+"\n"+m
							+"\n"+MF
							+"\n"+pioneer
							+"\n"+poison
							+"\n"+priority
			);
	if(chemialTW != "" && chemialEN != "" && casNo != "" && w != "" && v != "" && m != "" ){

	}


	});

})(jQuery); // End of use strict