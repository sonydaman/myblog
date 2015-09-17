    if(location.pathname == "2015/09/translator.html")
    {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://code.jquery.com/jquery-2.1.4.min.js';
  head.appendChild(script);
    }
 function Button1_onclick() 
    {
       try{
       var x=document.getElementById("transliterateTextarea");
        if(x.length)
        {x.value="";
        x.focus();
        }
       }
       catch(e){}
    }
window.onload = function() {
    setTimeout(function(){ 
        console.info("call")
        //console.debug($("myfooter"));
        //document.getElementById("myfooter").style.display='none'; 
        }, 1000);
       
    }    