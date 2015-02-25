
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

var row = Titanium.UI.createTableViewRow({
	rowTitle:menuTitles[i],
	height:"75dp",
	backgroundColor:"#fff",
	backgroundSelectedColor:"#bbb"
});

var titleLbl = Titanium.UI.createLabel({
	left:"10dp",
	text:menuTitles[i],
	color:"#6D6E71",
	font:{
  		fontSize:15,
  		fontFamily:'Arial',
		fontWeight:'regular'
	}
});
row.add(titleLbl);

var imgView = Titanium.UI.createImageView({
	image:"/images/"+imageTitles[i],
	height:"35dp",
	width:"35dp",
	right:"10dp"
});
//row.add(imgView);

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
//$.menuWindow.hide();

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

if(toggle){
	
   toggle = false;
  	$.windowView.animate(hide);
  	$.menuBtn.animate(hideBtn);
   
}//if


});
