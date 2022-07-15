temp=0;
i=0;
function fetch (n)

{
   i++;
   console.log(i);
   if(i==1&& n=="-")
   {
      temp2=n;
   }
   
   if(n=="+"|| n=="*"||n=="-")
   {
      document.getElementById("sign").innerText=n;
      temp=document.getElementById("answerdisplay").innerText+n;
     
      
      document.getElementById("answerdisplay").innerText=" ";
      
   }
   else
   {
      if(i==1&&n=="-")
   {
      document.getElementById("answerdisplay").innerText=temp2+n;
      console.log(document.getElementById("answerdisplay").innerText);
   }
   
   
      document.getElementById("answerdisplay").innerText+=n;
      temp+= document.getElementById("answerdisplay").innerText;
      console.log(temp);
   }
}

function calculate()
{
   ans= eval(temp);
   document.getElementById("answerdisplay").innerText=ans;
   
}
// for log calclulation
function dividans() {
   console.log(156)
   xd=document.getElementById("answerdisplay").innerText;
   document.getElementById("answerdisplay").innerText=1/xd;
 }

 function squareAns() {
   square=document.getElementById("answerdisplay").innerText;
   document.getElementById("answerdisplay").innerText=square*square;
 }

 function root(value) {
   x=document.getElementById("answerdisplay").innerText
   document.getElementById("answerdisplay").innerText=Math.sqrt(x)
 }

 // trigomatery function start
function sinans(value)
{
   s=document.getElementById("answerdisplay").innerText;
   document.getElementById("answerdisplay").innerText=Math.sin(s);
}
function cosans(value)
{
   s=document.getElementById("answerdisplay").innerText;
   document.getElementById("answerdisplay").innerText=Math.sin(90-s);
}
function tanans(value)
{
   s=document.getElementById("answerdisplay").innerText;
   document.getElementById("answerdisplay").innerText=Math.sin(s)/Math.sin(90-s);
}
// trigomatery function end 
function backspace()
{
var exp = document.getElementById("answerdisplay").innerText;
document.getElementById("answerdisplay").innerText = exp.substring(0, exp.length - 1); 
}
function cleardata() {
   document.getElementById("answerdisplay").innerText=" ";
   document.getElementById("sign").innerText=" ";
   document.getElementById("answerdisplay").placeholder="Enter Value ";
 }
 function factorailans(value)
 {
   a=document.getElementById("answerdisplay").innerText;
   temp=1;
   for( i=1;i<=a;i++)
   {
    temp*=i;
   }
   document.getElementById("answerdisplay").innerText=temp;

 }
 


 