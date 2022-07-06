canvas = document.getElementById("myCanvas");
color = "red";

//canvas.getContext("2d").beginPath();
//canvas.getContext("2d").strokeStyle = color;
//canvas.getContext("2d").lineWidth = 2;
//canvas.getContext("2d").arc(200, 200, 40, 0, 2*Math.PI);
//canvas.getContext("2d").stroke();

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2 * Math.PI);
ctx.stroke();

mouse_x = e.clientX
mouse_y = e.clientY

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2 * Math.PI);
ctx.stroke();

