function c(val)
{
document.getElementById("d").value=val;
}

function v(val)
{
document.getElementById("d").value+=val;
}

function back() 
{
   //delete last letter function.
    var value = document.getElementById("d").value;
    document.getElementById("d").value = value-1;

   document.getElementById("d").value = value.substr(0, value.length - 1);

}

function e() 
{ 
try 
{ 
  c(eval(document.getElementById("d").value)) 
} 
catch(e) 
{
  c('Error') 
} 
}  