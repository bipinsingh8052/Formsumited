
function mydata()
{
    var a=document.querySelector(".name");
var b=document.querySelector(".email");
var c=document.querySelector(".password");
var d=document.querySelector(".tel");
var e=document.querySelector(".feedback");
if(a==""||b==""||c==""||d==""||e=="")
{
    alert("All Fields are mendatory");
    return false;
}
else{
    true;
}
}