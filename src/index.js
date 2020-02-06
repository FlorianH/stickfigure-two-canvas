var context = document.getElementById("outer-canvas").getContext("2d");
var innerContext = document.getElementById("inner-canvas").getContext("2d");

// COLOR OF THE LINES
innerContext.strokeStyle = "#900";

// STICKMAN BEGIN
innerContext.beginPath();

// BODY
innerContext.moveTo(200, 300);
innerContext.lineTo(200, 500);

// LEGS
innerContext.lineTo(50, 650);
innerContext.moveTo(200, 500);
innerContext.lineTo(350, 650);

// HEAD
innerContext.moveTo(300, 200);
innerContext.arc(200, 200, 100, 0, 8);

// ARMS
innerContext.moveTo(200, 350);
innerContext.lineTo(350, 250); // RIGHT ARM
innerContext.moveTo(200, 350);
innerContext.lineTo(50, 250); // LEFT ARM

// STICKMAN END
innerContext.stroke();

context.drawImage(document.getElementById("inner-canvas"), 0, 0);
