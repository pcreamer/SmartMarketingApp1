       function drawdiagonal()
       {
       console.log("Hi");
       var canvas=document.getElementById('pc1');
       var context=canvas.getContext('2d');
       context.beginPath();
       context.rect(0, 0, 100, 100);
       context.moveTo(70,140);
       context.lineTo(140,70);
       context.lineWidth=10;
       context.strokeStyle = 'blue';
       context.fillStyle = 'yellow';
       context.fill();
       context.stroke();

       window.addEventListener("load",drawdiagonal,false);

       };
