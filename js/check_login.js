(function($) {
	var user = localStorage.getItem("user");
	var userInfo = JSON.parse(localStorage.getItem("userInfo"));
	var page = getAbsolutePath();


	if(user==null && page!="login.html"){
		window.location.href = "login.html";
	}else if(page=="login.html"){
		//檢查登入帳號密碼
		var items = checkAccount();
		$( "#login" ).click(function() {
		  var account = $( "#account" ).val();
		  var pwd = $( "#pwd" ).val();
		  var check = false;
		   
		  if(account=="" || pwd==""){
		  	alert("請輸入帳號密碼");
		  }else{
		  		var id = null;
		  		var data = null;
		  		$.each(items, function (index, value) {
		  			if(account==value[0] && pwd == value[1]){
		  				id = value[2];
		  				data = value[3];
		  				check = true;
		  			}
		  		});

			  	console.log(check);
			  	if(check){
			  		localStorage.setItem("user",id);
			  		localStorage.setItem("userInfo",data);
			  		window.location.href = "index.html";
			  	}else{
			  		console.log(account);
			  		console.log(pwd);
			  		alert("請輸入正確的帳號密碼");
			  		window.location.href = "login.html";
			  	}
		  }
		  
		});
	}else{

		console.log(user);
		console.log("DATA:"+userInfo);
		console.log("DATA:"+userInfo["name"]);
		$( "span.mr-2" ).text(userInfo["name"]);
		$('img.img-profile').attr('src','https://images.uncyc.org/zh-tw/3/3b/126.gif');
	}
	//
	
	//登出紀錄刪除
	$( "a.btn-primary" ).click(function() {
		localStorage.clear();
	});

})(jQuery); // End of use strict

function checkAccount()
{
	var result = [];
		  $.getJSON( "data/user.json", function( data ) {
					//console.log(data);
					//console.log(data["data"]);
					
					$.each(data["data"], function (index, eachData) {
						var acc = eachData["account"];
						var pw = eachData["pwd"];
						var id = eachData["id"];
						var data =  '{"name":"'+eachData["name"]+'","address":"'+eachData["address"]+'","phone":"'+eachData["phone"]+'","account":"'+eachData["account"]+'","pwd":"'+eachData["pwd"]+'"}';
						//console.log(acc);
						//console.log(pw);
						result.push([acc,pw,id,data]);
						//console.log(result);
						/*$.each(eachData, function (key, value) {
							
							//console.log(value);
						});//*/
					});
				});	
	return result;
}
function getAbsolutePath() {
    var loc = window.location;
    var pathName = loc.pathname.substring(loc.pathname.lastIndexOf('/') + 1, loc.pathname.length + 1);
    return pathName;
}