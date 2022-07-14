temp=0;
function fetch (n)

{
   
   if(n=="+"|| n=="*"||n=="-")
   {
      temp=document.getElementById("answerdisplay").value+n;
      console.log("temp value");
      console.log(temp)
     
     
   
      
      document.getElementById("answerdisplay").value= " ";
      

   }
   else
   {
        
      document.getElementById("answerdisplay").value+=n;
      temp+= document.getElementById("answerdisplay").value;
   
      // console.log(document.getElementById("answerdisplay").value);
     

   }
   
   // console.log(temp);
  



}

function calculate()
{
   
  
   ans= eval(temp);
   document.getElementById("answerdisplay").value=ans;
   
}