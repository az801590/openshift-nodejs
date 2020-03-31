console.log("a");
var recognize;
var recognizing=false;
var ltrans="";
	
if(!('webkitSpeechRecognition' in window))
{
	alert("It's not availbale in this browser.");
}
else
{
	recognize=new webkitSpeechRecognition();
	
	recognize.continuous=true;
	recognize.interimResults=true;
	recognize.lang="cmn-Hant-TW";
	/*
	**english:en-US
	**chinese:cmn-Hant-TW
	*/

	recognize.onstart=function()
	{
		//console.log("start");
		recognizing=true;
		document.getElementById("result").innerHTML="";
		document.getElementById("lastSent").innerHTML="";
		document.getElementById("mic").style.backgroundColor="#dc3545";
		document.getElementById("mic").style.borderColor="#dc3545";
	};
		
	recognize.onend=function()
	{
		//console.log("stop");
		recognizing=false;
		document.getElementById("result").innerHTML="";
		document.getElementById("mic").style.backgroundColor="#808080";
		document.getElementById("mic").style.borderColor="#808080";
	};
		
	recognize.onresult=function(event)
	{
		//console.log(event);
		var trans="";

		for(var i=event.resultIndex;i<event.results.length;i++)
		{
			if(event.results[i].isFinal)
			{
				ltrans=event.results[i][0].transcript;
			}
			else
			{
				trans+=event.results[i][0].transcript;
			}
		}
			
		if(trans.trim().length>0)
		{
			document.getElementById("result").innerHTML=trans;
		}
		if(ltrans.trim().length>0)
		{
			document.getElementById("lastSent").innerHTML=ltrans;
			document.getElementById("postVal").value=ltrans;
		}
	};
}
	
function micButton()
{
	if(recognizing)
	{
		recognize.stop();
	}
	else
	{
		recognize.start();
	}
}
