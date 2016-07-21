	var canvas = document.querySelector('canvas');
	var context = canvas.getContext('2d');
	context.strokeStyle = "white";
	context.lineWidth = '4';
	//云的左边
	context.beginPath();
	context.arc(104,150,100,Math.PI*2,Math.PI*2*.25,true);	
	context.stroke();
	context.closePath();
	//云的右边
	context.beginPath();
	context.arc(200,228,80,Math.PI*2*.75,Math.PI*2*.15,false);
	context.stroke();
	context.closePath();
	//太阳
	context.beginPath();
	context.arc(226,120,60,Math.PI*2*.6,Math.PI*2*.16,false);
	context.stroke();
	context.closePath();
	var canvas4 = document.querySelectorAll('canvas')[3];
	var context4 = canvas4.getContext('2d');
	context4.strokeStyle = "white";
	context4.lineWidth = '4';
	//阳光
	context4.beginPath();
	context4.moveTo(310,120);
	context4.lineTo(360,100);

	context4.moveTo(290,80);
	context4.lineTo(335,42);

	context4.moveTo(250,50);
	context4.lineTo(280,10);
	context4.stroke();
	context4.closePath();
	//雨滴
	var x = 0;
	setInterval(function(){
		if(x > 80){
			x = 0;
		}else{			
			x++;
		}		
		context.clearRect(126,200,226,300);
		context.beginPath();
		context.moveTo(130,200+x);
		context.lineTo(130,280);
		context.stroke();
		context.closePath();
	},30);
	var canvas2 = document.querySelectorAll('canvas')[1];
	var context2 = canvas2.getContext('2d');
	context2.strokeStyle = "white";
	context2.lineWidth = '4';
	var x2 = 0;
	setTimeout(function(){
		setInterval(function(){
			if(x2 > 80){
				x2 = 0;
			}else{			
				x2++;
			}
			context2.clearRect(126,200,226,300);
			context2.beginPath();
			context2.moveTo(180,220+x2);
			context2.lineTo(180,300);
			context2.stroke();
			context2.closePath();
			
		},30);
	},500);

	var canvas3 = document.querySelectorAll('canvas')[2];
	var context3 = canvas3.getContext('2d');
	context3.strokeStyle = "white";
	context3.lineWidth = '4'
	var x3 = 0;
	setTimeout(function(){
		setInterval(function(){
			if(x3 > 80){
				x3 = 0;
			}else{			
				x3++;
			}
			context3.clearRect(126,200,226,300);
			context3.beginPath();
			context3.moveTo(230,210+x3);
			context3.lineTo(230,290);
			context3.stroke();
			context3.closePath();			
		},30);
	},1000);
	//晴天
	var qingtian1 = document.querySelectorAll('.qingtian > canvas')[0];
	var qingtian1 = qingtian1.getContext('2d');
	qingtian1.strokeStyle = "white";
	qingtian1.fillStyle = '#6793fc';
	qingtian1.lineWidth = '4'
	for(var i = 0;i < 17;i++){
			qingtian1.beginPath();
			qingtian1.moveTo(200,200);
			qingtian1.arc(200,200,150,0,Math.PI*2/16*i,false);
			qingtian1.closePath();
			qingtian1.stroke();		
	}
	
	qingtian1.beginPath();
	qingtian1.arc(200,200,100,0,Math.PI*2,false);
	qingtian1.closePath();
	qingtian1.fill();
	qingtian1.beginPath();
	qingtian1.strokeStyle = "#6793fc";
	qingtian1.lineWidth = '6'
	qingtian1.arc(200,200,150,0,Math.PI*2,false);
	qingtian1.closePath();
	qingtian1.stroke();

	qingtian1.strokeStyle = "white";
	qingtian1.lineWidth = '6'
	qingtian1.beginPath();
	qingtian1.arc(200,200,90,0,Math.PI*2,false);
	qingtian1.closePath();
	qingtian1.stroke();
	