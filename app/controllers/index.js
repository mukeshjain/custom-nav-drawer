
$.index.open();

//============================ Nav Drawer ============================ //
////---- Menu Table
//Menu Titles
var menuTitles = [
	'HOME', 
	'APPROVE & PAY BILLS', 
	'UPLOAD A BILL', 
	'BILL CALENDER', 
	'SELECT COMPANY', 
	'SETTINGS', 
	'CHANGE PASSWORD',
	'LOGOUT'
];

var imageTitles = [
	'home-1-48.png', 
	'thumb-48.png', 
	'camera-2-48.png', 
	'calendar-1-48.png', 
	'accounts-48.png', 
	'settings-2-48.png', 
	'change_user.png',
	'logout-2-48.png'
];

var dataArray = [];

for(var i=0; i<menuTitles.length; i++){

	var payload={
		rw_title:menuTitles[i],
		rw_image:"/images/"+imageTitles[i]		
	};
	
	var row=Alloy.createController('tableview_row',payload).getView();
		dataArray.push(row);

}//for

//Tableview
$.tableView.setData(dataArray);

$.tableView.addEventListener("click", function(e){

	if(toggle){
		
	   toggle = false;
	  	$.windowView.animate(hide);
	  	$.menuBtn.animate(hideBtn);
	   
	}//if

});

var toggle = false;

var show = Ti.UI.createAnimation({
	left:240,
	duration: 400,
});

var hide = Ti.UI.createAnimation({
	left:0,
	duration: 400,
});

var showBtn = Ti.UI.createAnimation({
	left:250,
	duration: 400,
});

var hideBtn = Ti.UI.createAnimation({
	left:5,
	duration: 400,
});

$.menuBtn.addEventListener('click', function(e) {

	if(toggle){
		
	   toggle = false;
	   $.windowView.animate(hide);
	   $.menuBtn.animate(hideBtn);
	   
	}else{
		
	   toggle = true;
	   $.windowView.animate(show);
	   $.menuBtn.animate(showBtn);
	   
	}//else

});

$.windowView.addEventListener('click', function(e) {
	/*
	if(toggle){
		
		toggle = false;
		$.windowView.animate(hide);
		$.menuBtn.animate(hideBtn);
	   
	}//if
	*/
});

var swipeLeftToRight = function(start, end) {
	
    var dif = end - start;
    if(dif > 100) { 
        return true;
    } else {
        return false;
    }
    
};
 	
 	var lr_start = null;
 	var lr_end = null;
 
$.windowView.addEventListener('touchstart', function(e1) {
    lr_start = e1.x;
});
 
$.windowView.addEventListener('touchend', function(e2) {
    lr_end = e2.x;
   
    if(lr_start) {
        if(swipeLeftToRight(lr_start, lr_end)) {
            
            if(toggle == false){					
			   toggle = true;
			   $.windowView.animate(show);
			   $.menuBtn.animate(showBtn);
			   
			}//else
        }
        lr_start = null;
    }
    
});
