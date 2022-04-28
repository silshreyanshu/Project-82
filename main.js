canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "red";
radius = 0;
line_width = 5;
mouse_event="";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
mouse_event = "mousedown";
radius = 25;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouse_event = "mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouse_event = "mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
   currentX = e.clientX - canvas.offsetLeft; 
   currentY = e.clientY - canvas.offsetTop; 
   if(mouse_event=="mousedown"){
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = line_width;
       ctx.arc(currentX , currentY , radius , 0 , 2 * Math.PI);
       ctx.stroke();
   }
   lastX = currentX;
   lastY = currentY;
}