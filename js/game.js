// <script type="text/javascript">
	var r = prompt("enter the no. of rows")
	var colorList = ['red','blue','yellow','green','pink','orange','violet','brown']
	var c = prompt("enter the no. of columns")
	var noOfPlayers = prompt("enter the no. of players not more than 8")
	var playerslist = [];

var x = +0;
	


 var Grid = []
	function tableCreate() {
  //body reference 
  var body = document.getElementsByTagName("body")[0];

  // create elements <table> and a <tbody>
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // cells creation
  for (var j = 0; j < r; j++) {
    // table row creation
    let innerarray = []
    var row = document.createElement("tr");

    for (var i = 0; i < c; i++) {
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("td");
      // var div = document.createElement("div");

      var cellText = document.createTextNode("");
      cell.setAttribute("id", "m"+i+"k"+j);
      cell.setAttribute("data-x", i);
      cell.setAttribute("data-y", j);
      cell.setAttribute("class","cell")
      cell.setAttribute("onclick","myevent(this)")
      cell.appendChild(cellText);
      // cell.appendChild(div);
      row.appendChild(cell);
      // div.setAttribute("class","divprop")

      
      if((i==0 && j==0 )|| (i==(c- +1) && (j==0)) || (j==(r - +1) && i==0 )|| (i==(c- +1) && j==(r- +1))){
      innerarray.push({wieght:0,thresholdW:1,color:'black',already:false})	
      }
      else if((i==0 && j!=0  &&  j!=(+r- +1)) || (+i==c- +1 && j!=0  &&  j!=(+r- +1)) || (j==0 && i!=0  &&  i!=(+c- +1)) || (j==(+r- +1) && i!=0  &&  i!=(+c- +1))){
      innerarray.push({wieght:0,thresholdW:2,color:'black',already:false})	
      }
      else{
      innerarray.push({wieght:0,thresholdW:3,color:'black',already:false})	
      console.log('mukul great');
      }

    }
    Grid.push(innerarray);
    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);
  // tbl border attribute to 
  tbl.setAttribute("border", "2");
}
tableCreate()



function removeElement(elementId) {
    console.log(elementId)
    console.log(elementId,'   removing an element')


    var element = document.getElementById(elementId);
    // element.removeChild(element);
    $(element).empty();

    // console.log('her kjshfdfkjsdhfkjsdfhkj')
    // Removes an element from the document
    // for (var i = 0; i < element.length; i++) {
    // element.parentNode.removeChild(element);
  		
// }
}

	for (var i=0;i<noOfPlayers;i++){
		playerslist.push({
			color: colorList[i],
			points: +0
		})
	}

function addOneElement(parentId, elementTag, elementClass,m,n) {
    // Adds an element to the document
    console.log('hellow world add One Element');

    var colour = Grid[m][n].color
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('class', elementClass+1+colour);

    for(var i =0;i<Grid[m][n].wieght;i++){
    p.appendChild(newElement);

    }
   
}
function removeaddElement(parentId, elementTag, elementClass,m,n,addelement) {
    // Adds an element to the document
    console.log('hellow world remove add Element');
    // if(Grid[m][n].wieght>Grid[m][n].thresholdW){
    removeElement(parentId);
addelement(parentId, elementTag, elementClass,m,n)
    // }
    // setTimeout(,250);
    // var colour = Grid[m][n].color
    // var p = document.getElementById(parentId);
    // var newElement = document.createElement(elementTag);
    // newElement.setAttribute('class', elementClass+1+colour);

    // for(var i =0;i<Grid[m][n].wieght;i++){
    // p.appendChild(newElement);

    }
// burst funtion for a cell
function checkcell(x,y,colo){
	if(+Grid[x][y].wieght>+Grid[x][y].thresholdW){
		Grid[x][y].wieght = 0;
		Grid[x][y].color = 'black';
		var id = 'm'+( +x + +1)+'k'+(y); 
		removeElement(id);
		// document.getElementById(id).style.color = 'black';
		burst(x,y,colo,function check(m,n,bgcolor){
			checkcell(m,n,bgcolor)	;
	checkcell((m),(n),bgcolor)	;
		});
		console.log('burst cell '+x+':'+y);
		
	}
	else {
		return 0
	}
}

function burst(x1,y1,bgcolor,callback){
	console.log("x is "+x1+y1)
	var id = 'm'+(x1)+'k'+(y1); 
	document.getElementById(id).style.color = 'black';
	Grid[(+x1)][(+y1)].already = false
removeaddElement(id,'div','onecircles',x1,y1,function (){
	return 0

    });

	if((x1==0 && y1==0 )){
	var id1 = 'm'+( +x1 + +1)+'k'+(y1); 
	var id2 = 'm'+(x1)+'k'+(+y1 + +1); 
	console.log(id1,id2,'x1==0 && y1==0 ')
	
	Grid[( +x1 + +1)][y1].color = bgcolor
	Grid[(+x1)][(+y1 + +1)].color = bgcolor
    removeaddElement(id,'div','onecircles',x1,y1,function (){
	addOneElement(id1,'div','onecircles',x1,y1)
	addOneElement(id2,'div','onecircles',x1,y1)

    });
    // removeaddElement(id2,'div','onecircles',x1,y1);

Grid[( +x1 + +1)][+y1].wieght = Grid[( +x1 + +1)][+y1].wieght + +1
	Grid[(+x1)][(+y1 + +1)].wieght = Grid[(+x1)][(+y1 + +1)].wieght + +1
	document.getElementById(id1).style.color = bgcolor	;	
	document.getElementById(id2).style.color = bgcolor;
	
	Grid[ +x1 + +1][+y1].already = true;
	Grid[(+x1)][(+y1 + +1)].already = true;

		// document.getElementById(id).style.color = 'black';

	callback(+x1 + +1,+y1,bgcolor);
	callback(+x1,+y1 + +1,bgcolor);



 // return true
	}
	else if(x1==0 && y1==r-1){
		console.log('x1==0 && y1==r-1')
	var id1 = 'm'+(+x1 + +1)+'k'+(y1);
	var id2 = 'm'+(x1)+'k'+(+y1 - +1); 
		document.getElementById(id1).style.color = bgcolor	;	
	document.getElementById(id2).style.color = bgcolor	;	
	
removeaddElement(id,'div','onecircles',x1,y1,function (){
	addOneElement(id1,'div','onecircles',x1,y1)
	addOneElement(id2,'div','onecircles',x1,y1)
    });
	Grid[( +x1 + +1)][y1].wieght = Grid[( +x1 + +1)][y1].wieght + +1
	Grid[(+x1)][(+y1 - +1)].wieght = Grid[(+x1)][(+y1 - +1)].wieght + +1
		Grid[( +x1 + +1)][y1].color = bgcolor 
	Grid[(+x1)][(+y1 - +1)].color = bgcolor
	Grid[( +x1 + +1)][y1].already = true
	Grid[(+x1)][(+y1 - +1)].already = true
		// document.getElementById(id).style.color = 'black';

		// callback();
	callback(+x1 + +1,y1,bgcolor);
	callback(+x1,+y1 - +1,bgcolor);

	// return true


	}
	else if(x1==c-1 && y1==0){
	var id1 = 'm'+(+x1 - +1)+'k'+(y1); 
	var id2 = 'm'+(x1)+'k'+(+y1 + +1); 
	document.getElementById(id1).style.color = bgcolor	;	
	document.getElementById(id2).style.color = bgcolor	;	
	removeaddElement(id,'div','onecircles',x1,y1,function (){
	addOneElement(id1,'div','onecircles',x1,y1)
	addOneElement(id2,'div','onecircles',x1,y1)
    });
console.log('x1==c-1 && y1==0')
	Grid[( +x1 - +1)][y1].wieght = Grid[( +x1 - +1)][+y1].wieght + +1
	Grid[(+x1)][(+y1 + +1)].wieght = Grid[(+x1)][(+y1 + +1)].wieght + +1
Grid[( +x1 - +1)][y1].color = bgcolor
	Grid[(+x1)][(+y1 + +1)].color = bgcolor

	Grid[( +x1 - +1)][y1].already = true
	Grid[(+x1)][(+y1 + +1)].already = true
		// document.getElementById(id).style.color = 'black';
	
	callback(+x1 - +1,y1,bgcolor);
	callback(+x1,+y1 + +1,bgcolor);


	// return true


	}
	else if(x1==c-1 && y1==r-1){
	var id1 = 'm'+( +x1 - +1)+'k'+(y1); 
	var id2 = 'm'+(x1)+'k'+(+y1 - +1); 
	console.log('x1==c-1 && y1==r-1')
	Grid[( +x1 - +1)][y1].wieght = Grid[( +x1 - +1)][+y1].wieght + +1
	Grid[(+x1)][(+y1 - +1)].wieght= Grid[(x1)][(+y1 - +1)].wieght + +1
Grid[( +x1 - +1)][y1].color = bgcolor;
	Grid[(+x1)][(+y1 - +1)].color= bgcolor;

	document.getElementById(id1).style.color = bgcolor	;	
	document.getElementById(id2).style.color = bgcolor	;	
	removeaddElement(id,'div','onecircles',x1,y1,function (){
	addOneElement(id1,'div','onecircles',x1,y1)
	addOneElement(id2,'div','onecircles',x1,y1)
    });
	Grid[( +x1 - +1)][y1].already = true;
	Grid[(+x1)][(+y1 - +1)].already = true;
		// document.getElementById(id).style.color = 'black';
	console.log('drishyam dekho bhai')
	callback(+x1 - +1,y1,bgcolor);
	callback(+x1,+y1 - +1,bgcolor);

	// return true

	}
	else if(y1==0){
		// document.getElementById(id).style.color = 'black';
		
		var id1='m'+(+x1)+'k'+(+y1+ +1)
		var id2='m'+(+x1 + +1)+'k'+(+y1)
		var id3='m'+(+x1 - +1)+'k'+(+y1)
		console.log("y1==0")
		Grid[( +x1)][+y1+ +1].wieght = Grid[( +x1)][+y1+ +1].wieght + +1
	Grid[(+x1+ +1)][(+y1 )].wieght = Grid[(+x1 + +1)][(+y1)].wieght + +1
	Grid[(+x1- +1)][(+y1 )].wieght = Grid[(+x1- +1)][(+y1)].wieght + +1
	Grid[( +x1)][+y1+ +1].color = bgcolor
	Grid[(+x1+ +1)][(+y1 )].color = bgcolor
	Grid[(+x1- +1)][(+y1 )].color = bgcolor
	Grid[( +x1)][+y1+ +1].already = true
	Grid[(+x1+ +1)][(+y1 )].already = true
	Grid[(+x1- +1)][(+y1 )].already = true
	// Grid.already = true
	
		document.getElementById(id1).style.color = bgcolor	;	
	document.getElementById(id2).style.color = bgcolor	;
	document.getElementById(id3).style.color = bgcolor	;	
	removeaddElement(id,'div','onecircles',x1,y1,function (){
	addOneElement(id1,'div','onecircles',x1,y1)
	addOneElement(id2,'div','onecircles',x1,y1)
addOneElement(id3,'div','onecircles',x1,y1)
    
    });
	// addOneElement(id2,'div','onecircles',x1,y1)


	callback(+x1,+y1+ +1,bgcolor);
	callback(+x1+ +1,+y1,bgcolor);
	callback(+x1- +1,+y1,bgcolor);
	// return true
	// document.getElementById(id2).style.color = bgcolor	;
	}
	else if(x1==0){
		var id1='m'+(+x1 + +1)+'k'+(+y1)
		var id2='m'+(+x1)+'k'+(+y1 + +1)
		var id3='m'+(+x1)+'k'+(+y1 - +1)
		// document.getElementById(id).style.color = 'black';
	console.log('x1==0')
		Grid[( +x1+ +1)][+y1].wieght = Grid[( +x1 + +1)][+y1].wieght + +1
	Grid[(+x1)][(+y1+ +1 )].wieght = Grid[(+x1)][(+y1 + +1)].wieght + +1
	Grid[(+x1)][(+y1- +1 )].wieght = Grid[(+x1)][(+y1 - +1)].wieght + +1
Grid[( +x1+ +1)][+y1].color = bgcolor
	Grid[(+x1)][(+y1+ +1 )].color = bgcolor
	Grid[(+x1)][(+y1- +1 )].color = bgcolor
Grid[( +x1+ +1)][+y1].already = true
	Grid[(+x1)][(+y1+ +1 )].already = true
	Grid[(+x1)][(+y1- +1 )].already = true
	removeaddElement(id,'div','onecircles',x1,y1,function (){
	addOneElement(id1,'div','onecircles',x1,y1)
	addOneElement(id2,'div','onecircles',x1,y1)
addOneElement(id3,'div','onecircles',x1,y1)
    
    });

	
		document.getElementById(id1).style.color = bgcolor	;	
	document.getElementById(id2).style.color = bgcolor	;
	document.getElementById(id3).style.color = bgcolor;

	callback(+x1+ +1,+y1,bgcolor);
	callback(+x1,+y1 + +1,bgcolor);
	callback(+x1,+y1 - +1,bgcolor);
	// return true;
	}
	else if(x1==c-1){
		var id1='m'+(+x1 - +1)+'k'+(+y1)
		var id2='m'+(+x1 )+'k'+(+y1 + +1)
		var id3='m'+(+x1 )+'k'+(+y1 - +1)
		// document.getElementById(id).style.color = 'black';
console.log('x1==c-1')
		Grid[( +x1 - +1)][+y1].wieght = Grid[( +x1 - +1)][+y1].wieght + +1
	Grid[(+x1)][(+y1+ +1 )].wieght = Grid[(+x1)][(+y1+ +1)].wieght + +1
	Grid[(+x1)][(+y1 - +1 )].wieght = Grid[(+x1)][(+y1 - +1)].wieght + +1
	Grid[( +x1 - +1)][+y1].color = bgcolor
	Grid[(+x1)][(+y1+ +1 )].color = bgcolor
	Grid[(+x1)][(+y1 - +1 )].color = bgcolor
Grid[( +x1 - +1)][+y1].already = true
	Grid[(+x1)][(+y1+ +1 )].already = true
	Grid[(+x1)][(+y1 - +1 )].already = true
removeaddElement(id,'div','onecircles',x1,y1,function (){
	addOneElement(id1,'div','onecircles',x1,y1)
	addOneElement(id2,'div','onecircles',x1,y1)
addOneElement(id3,'div','onecircles',x1,y1)
    
    });

		document.getElementById(id1).style.color = bgcolor	;	
	document.getElementById(id2).style.color = bgcolor	;
	document.getElementById(id3).style.color = bgcolor

	callback(+x1- +1,+y1,bgcolor);
	callback(+x1,+y1 + +1,bgcolor);
	callback(+x1,+y1 - +1,bgcolor);
	// return true;
	
	}
	else if(y1==r-1){
		var id1='m'+(+x1)+'k'+(+y1 - +1)
		var id2='m'+(+x1 + +1)+'k'+(+y1)
		var id3='m'+(+x1 - +1)+'k'+(+y1)
		// document.getElementById(id).style.color = 'black';
console.log('y1==r-1')
		Grid[( +x1)][+y1- +1].wieght = Grid[( +x1)][+y1- +1].wieght + +1
	Grid[(+x1+ +1)][(+y1 )].wieght = Grid[(+x1 + +1)][(+y1)].wieght + +1
	Grid[(+x1- +1)][(+y1 )].wieght = Grid[(+x1- +1)][(+y1)].wieght + +1
Grid[( +x1)][+y1- +1].color = bgcolor
	Grid[(+x1+ +1)][(+y1 )].color = bgcolor
	Grid[(+x1- +1)][(+y1 )].color = bgcolor
	Grid[( +x1)][+y1- +1].already = true
	Grid[(+x1+ +1)][(+y1 )].already = true
	Grid[(+x1- +1)][(+y1 )].already = true
removeaddElement(id,'div','onecircles',x1,y1,function (){
	addOneElement(id1,'div','onecircles',x1,y1)
	addOneElement(id2,'div','onecircles',x1,y1)
addOneElement(id3,'div','onecircles',x1,y1)
    
    });
		document.getElementById(id1).style.color = bgcolor	;	
	document.getElementById(id2).style.color = bgcolor	;
	document.getElementById(id3).style.color = bgcolor

	callback(+x1,+y1- +1,bgcolor);
	callback(+x1 + +1,+y1,bgcolor);
	callback(+x1 - +1,+y1,bgcolor);
	// return true;
	
	}


	else{
		var id1='m'+(+x1)+'k'+(+y1 - +1)
		var id2='m'+(+x1)+'k'+(+y1 + +1)
		var id3='m'+(+x1 - +1)+'k'+(+y1)
		var id4='m'+(+x1 + +1)+'k'+(+y1)
		// document.getElementById(id).style.color = 'black';

		Grid[( +x1)][+y1- +1].wieght = +Grid[( +x1)][+y1- +1].wieght + +1
	Grid[(+x1)][(+y1 + +1 )].wieght = +Grid[(+x1)][(+y1 + +1)].wieght + +1
	Grid[(+x1- +1)][(+y1 )].wieght = +Grid[(+x1- +1)][(+y1)].wieght + +1
	Grid[(+x1+ +1)][(+y1 )].wieght = +Grid[(+x1+ +1)][(+y1)].wieght + +1

	Grid[( +x1)][+y1- +1].color = bgcolor
	Grid[(+x1)][(+y1 + +1 )].color = bgcolor
	Grid[(+x1- +1)][(+y1 )].color = bgcolor
	Grid[(+x1+ +1)][(+y1 )].color = bgcolor
Grid[( +x1)][+y1- +1].already = true
	Grid[(+x1)][(+y1 + +1 )].already = true
	Grid[(+x1- +1)][(+y1 )].already = true
	Grid[(+x1+ +1)][(+y1 )].already = true
	removeaddElement(id,'div','onecircles',x1,y1,function (){
	addOneElement(id1,'div','onecircles',x1,y1);
	addOneElement(id2,'div','onecircles',x1,y1);
addOneElement(id3,'div','onecircles',x1,y1);
	addOneElement(id4,'div','onecircles',x1,y1);
    
    });
console.log('char vala function')
	
			document.getElementById(id1).style.color = bgcolor	;	
	document.getElementById(id2).style.color = bgcolor	;
	document.getElementById(id3).style.color = bgcolor;
	document.getElementById(id4).style.color = bgcolor;

	callback(+x1,+y1- +1,bgcolor);
	callback(+x1,+y1+ +1,bgcolor);
	callback(+x1 - +1,+y1,bgcolor);
	callback(+x1 + +1,+y1,bgcolor);

	// return true;
	 
// console.log('burst function');
	}
		

// console.log('burst function');
}

function myevent(arg) {
	// body...
	var x1 = arg.getAttribute("data-x");
	var y1 = arg.getAttribute("data-y"); 
	if(!Grid[x1][y1].already || Grid[x1][y1].color == playerslist[x%noOfPlayers].color ){

	Grid[x1][y1].wieght = Grid[x1][y1].wieght + +1;
	console.log(x1,y1)
	gameOn(playerslist,x1,y1,function checkwin1(){
		checkwin(Grid[x1][y1].color);

	});
	
	}
	else {
		alert('choose another cell')
	}
}
// =============================================
function play(x1,y1,colo){
var id = 'm'+( +x1)+'k'+(y1);

	// if(Grid[x1][y1].wieght==1){
		removeaddElement(id,'div','onecircles',x1,y1,function (){
		
		for(var i =0;i<Grid[x1][y1].wieght;i++){

		addOneElement(id,'div','onecircles',x1,y1);


    }
    
    });
		// console.log('yeh toh chal rha h')
										
	// }
	// else if(Grid[x1][y1].wieght==2){
				// addTwoElement(id,'div','twocircles');
										
	// }

	// else if(Grid[x1][y1].wieght==3){
		// addThreeElement(id,'div','threecircles');
										
	// }
	
	if(Grid[x1][y1].wieght>Grid[x1][y1].thresholdW){
		// var colo = 'red'
		// call back function definition====================
		burst(x1,y1,colo,function (x,y,colour) {checkcell((x),(y),colour);
		console.log('bursting is great') });
		Grid[x1][y1].wieght = +0;
var id = 'm'+(+x1)+'k'+(y1);

		removeElement(id);	
console.log('if function');

	}
	else{
console.log('else function',Grid[x1][y1].wieght);
	var chances= playerslist.length
		var chance = x%chances;
	// Grid[x1][y1].wieght = +Grsid[x1][y1].wieght + +1;
	}
}
function checkwin(arg){

	var win = true
	for (var j = 0; j < r; j++) {
    // table row creation
   
    for (var i = 0; i < c; i++) {
    	var id = 'm'+(j)+'k'+(i);
    	// removeElement(id)
    	if(Grid[j][i].color != arg && Grid[j][i].color != 'black'){
    		win = false;
    	}


    	addOneElement(parentId, elementTag, elementClass,j,i)
    }}
 if(win){
 	alert('someone wins');

 }
}
function gameOn(playerslist,x1,y1,checkwin1){
		var chances = playerslist.length
		
		var chance = x%chances;
		var wins = false;
		// while(!wins){
var id = 'm'+(+x1)+'k'+(y1);
			switch(chance){
				case 0 :
				x = x + 1;
				
				Grid[x1][y1].color = playerslist[chance].color;
				// var childpr =document.getElementById(id).childNodes;
		// document.getElementById(id).style.color = playerslist[chance].color;
				// console.log()
				// childpr[0].style.backgroundColor = 'brown';
				Grid[x1][y1].already = true


				playerslist[chance].points = playerslist[chance].points + +1;  
				play(x1,y1,playerslist[chance].color);

				break;
				
				case 1 :
				x = x + 1;
				Grid[x1][y1].color = playerslist[chance].color;
		// document.getElementById(id).style.color = playerslist[chance].color;
				Grid[x1][y1].already = true
				playerslist[chance].points = playerslist[chance].points + +1;  
				play(x1,y1,playerslist[chance].color);

				// console.log('player'+chance)
				// removeElement()

				break;


				case 2 :
				x = x + 1;
				Grid[x1][y1].color = playerslist[chance].color;
		// document.getElementById(id).style.color = playerslist[chance].color;
				Grid[x1][y1].already = true

				playerslist[chance].points = playerslist[chance].points + +1;  
				play(x1,y1,playerslist[chance].color);

				// console.log('player'+chance)

				break;
				
				case 3 :
				x = x + 1;
				Grid[x1][y1].color = playerslist[chance].color;
		// document.getElementById(id).style.color = playerslist[chance].color;
				Grid[x1][y1].already = true

				playerslist[chance].points = playerslist[chance].points + +1;  
				play(x1,y1,playerslist[chance].color);

				// console.log('player'+chance)

				break;
				
				case 4 :
				x = x + 1;
				Grid[x1][y1].color = playerslist[chance].color;
		// document.getElementById(id).style.color = playerslist[chance].color;
				Grid[x1][y1].already = true

				playerslist[chance].points = playerslist[chance].points + +1;  
				play(x1,y1,playerslist[chance].color);
				// console.log('player'+chance)

				break;
				
				case 5 :
				x = x + 1;
				playerslist[chance].points = playerslist[chance].points + +1;  
				Grid[x1][y1].color = playerslist[chance].color;
		// document.getElementById(id).style.color = playerslist[chance].color;
				Grid[x1][y1].already = true
				play(x1,y1,playerslist[chance].color);

				// console.log('player'+chance)

				break;
				
				case 6 :
				x = x + 1;
				playerslist[chance].points = playerslist[chance].points + +1;  
				Grid[x1][y1].color = playerslist[chance].color;
		// document.getElementById(id).style.color = playerslist[chance].color;
				Grid[x1][y1].already = true
				play(x1,y1,playerslist[chance].color);

				// console.log('player'+chance)

				break;
				
				case 7 :
				x = x + 1;
				playerslist[chance].points = playerslist[chance].points + +1;  
				Grid[x1][y1].color = playerslist[chance].color;
		// document.getElementById(id).style.color = playerslist[chance].color;
				Grid[x1][y1].already = true
				play(x1,y1,playerslist[chance].color);
				
				// console.log('player'+chance)

				break;



			// }
		}
		if(x!=1){
			console.log('checking win')
		checkwin1(playerslist[chance].color); 
		}

	}


// </script>