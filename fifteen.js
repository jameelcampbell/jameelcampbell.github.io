// Variables

var div;
var blink;
var timer;
var tileAvailableY = '300px';
var tileAvailableX = '300px';


function onload(){
	var puzzlearea = document.getElementById('puzzlearea');
	div = puzzlearea.getElementsByTagName('div');

	for(var index = 0; index < div.length; index++)	{
		div[i].className = 'puzzlepiece';
		div[i].style.left = (i % 4 * 100) +'px';
		div[i].style.top = (parseInt(i / 4) * 100) + 'px';
		div[i].style.backgroundPosition = '-' + div[i].style.left + ' ' + '-' + div[i].style.top;
		
		div[i].onmouseover = function()	{
			if(checkSwitchTile(parseInt(this.innerHTML)))	{
				this.style.border = '2px solid black';
				this.style.color = '#006600';
			}
		};
		
		div[i].onmouseout = function()	{
			this.style.border = "2px solid black";
			this.style.color = '#000000';
		};

		div[i].onclick = function()	{
			if(checkSwitchTile(parseInt(this.innerHTML)))	{
				swap(this.innerHTML-1);
				if(complete())	{
					winner();
				}
			return;
			}
		};
	}


var shufflebutton = document.getElementById('shufflebutton');
shufflebutton.onClick = function()	{
	for(var index = 0; index < 250; index++)	{
		var rand = parseInt(Math.random()*100) %4;
		if(rand == 0)	{
			var tmp = calcUp(tileAvailableX, tileAvailableY);
			if(tmp != -1)
			{
				swap(tmp);
			}
		}

		if (rand == 1)	{
			var tmp = calcDown(tileAvailableX,tileAvailableY);
			if(tmp != -1)
			{
				swap(tmp);
			}
		}

		if(rand == 2)	{
			var tmp = calcLeft(tileAvailableX, tileAvailableY);
			if(tmp != -1)
			{
				swap(tmp);
			}
	    }

		if(rand == 3)	{
			var tmp = calcRight(tileAvailableX, tileAvailableY);
			if (tmp != -1)
			{
				swap(tmp);
			}
		}
	};
};

function Blink()	{
	blink --;
	if (blink == 0)	{
		var body = document.getElementsByTagName('body');
		body[0].style.backgroundColor = "#FFFFFF";
		alert('You Win!');
		return;
	}
	
	if (blink % 2)	{
		var body = document.getElementsByTagName('body');
		body[0].style.backgroundColor = "#00FF00";	
	
		
	}	else	{
		var body = document.getElementsByTagName('body');
		body[0].style.backgroundColor = "#FF0000";
	}
	timer = setTimeout(Blink, 100);
}

function checkSwitchTile(pos)	{
	if (calcLeft(tileAvailableX, tileAvailableY) == (pos-1))
	{
		return true;
	}

	if (calcDown(tileAvailableX, tileAvailableY) == (pos-1))
	{
		return true;
	}

	if (calcUp(tileAvailableX, tileAvailableY) == (pos-1))
	{
		return true;
	}

	if (calcRight(tileAvailableX, tileAvailableY) == (pos-1))
	{
		return true;
	}
}

function winner()	{
	var body = document.getElementsByTagName('body');
	body[0].style.backgroundColor = "#FF0000";
	blink = 10;
	timer = setTimeout(Blink, 100);
}

function complete()	{
	var flag = true;
	for (var index = 0; index < div.length; index++) {
		var y = parseInt(div[i].style.top);
		var x = parseInt(div[i].style.left);

		if (x != (i % 4 * 100) || y != parseInt(i / 4) * 100)
		{
			flag = false;
			break;
		}
	}
	return flag;
}

function calcLeft(x, y)	{
	var xaxis = parseInt(x);
	var yaxis = parseInt(y);

	if (xaxis> 0)
	{
		for (var index = 0; index < div.length; index++) 
		{
			if (parseInt(div[i].style.left) + 100 == xaxis && parseInt(div[i].style.top) == yaxis)
			{
				return i;
			} 
		}
	}	else 	{
		return -1;
	}
}

function calcRight (x, y) {
	var xaxis = parseInt(x);
	var yaxis = parseInt(y);
	if (xaxis < 300)	{
		for (var index = 0; index < div.length; index++){
			if (parseInt(div[i].style.left) - 100 == xaxis && parseInt(div[i].style.top) == yaxis) 
			{
				return i;
			}
		}
	}	else	{
		return -1;
	} 
}

function calcUp (x, y) {
	var xaxis = parseInt(x);
	var yaxis = parseInt(y);
	if (yaxis > 0)
	{
		for (var index = 0; index < div.length; index++)
		{
			if (parseInt(div[i].style.top) + 100 == yaxis && parseInt(div[i].style.left) == xaxis) 
			{
				return i;
			}
		} 
	}	else 	{
		return -1;
	}
}

function calcDown (x, y)
{
	var xaxis = parseInt(x);
	var yaxis = parseInt(y);
	if (yaxis < 300)
	{
		for (var index = 0; index < div.length; index++)
		{
			if (parseInt(div[i].style.top) - 100 == yaxis && parseInt(div[i].style.left) == xaxis) 
			{
				return i;
			}
		}
	}
	else
	{
		return -1;
	} 
}

function swap (pos) {
	var temp = div[pos].style.top;
	div[pos].style.top = tileAvailableY;
	tileAvailableY = temp;
	temp = div[pos].style.left;
	div[pos].style.left = tileAvailableX;
	tileAvailableX = temp;
}
