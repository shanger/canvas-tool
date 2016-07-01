

var demo = new Vue({
	el:"#demo",
	data:{
		add:{
			name:'',
			percent:'',
			placeholder:'100'
		},
		input:[
			//{name:'',percent:''},
		],
		inputpercent:'',
		inputname:'',
		tips:{
			show:false,
			text:''
		}

	},
	created:function(){
		this.getinput();
	},	
	methods:{
		Add:function(){
			if(parseInt(this.add.percent) > parseInt(this.add.placeholder)){
				this.inputpercent.focus();
				this.inputpercent.value = '';
				this.tipsShow('数值不能大于<label>'+this.add.placeholder+'</label>');
			}else if(this.add.name == ''){
				this.inputname.focus();
				this.tipsShow('请完善信息！');
			}else if(this.add.percent == ''){
				this.inputpercent.focus();
				this.tipsShow('请完善信息！');
			}else if(isNaN(parseInt(this.add.percent))){
				this.inputpercent.focus();
				this.tipsShow('请输入有效数字！');
			}
			else{
				var color = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
				var deg = 0;
				this.input.push({
					name:this.add.name,
					percent:this.add.percent,
					color:color
				})
				this.input.forEach(function(ele,index){
					deg += parseInt(ele.percent);
				});
				this.add.placeholder = this.add.placeholder - this.add.percent;
				this.inputpercent.value = '';
				this.draw(color,deg/100);//饼状图
				this.barChart(color,this.add.percent/100,this.input.length);//柱状图
				this.brokenLine();//折线图
			}
			
		},
		draw:function(color,deg){
			var canvas = document.querySelectorAll('canvas')[0];
            var context = canvas.getContext("2d");
            context.beginPath();  
            context.moveTo(200, 200);  
            context.arc(200, 200, 200, 0, Math.PI * 2*deg, false);  
            context.closePath();  
            context.fillStyle = color;
            context.fill();
            context.globalCompositeOperation = "destination-over";
		},
		barChart:function(color,deg,len){
			var canvas = document.querySelectorAll('canvas')[1];
            var context = canvas.getContext("2d");
            context.beginPath();  
            context.fillStyle = color;
            context.fillRect(60*(len-1),400*(1-deg),40,400)
            context.closePath();  
		},
		getinput:function(){
			var This = this;
			Vue.nextTick(function () {
			  This.inputpercent = This.$els.percent;
			  This.inputname = This.$els.name;
			})
		},
		brokenLine:function(){
			var This = this;
			var list = this.input;
			var len = list.length;
			var canvas = document.querySelectorAll('canvas')[2];
	        var context = canvas.getContext("2d");
	        //context.moveTo(0,400);
	        //context.beginPath(); 
			/*list.forEach(function(ele,index){  	
				context.lineTo((index + 1)*40,400*( 1-parseInt(list[index].percent)/100 ));	
				context.lineWidth = 1; 
				context.strokeStyle = list[index].color;
				context.stroke(); 			
			})*/
			context.lineTo((len)*40,400*( 1-parseInt(list[len-1].percent)/100 ));	
			context.lineWidth = 2; 
			context.strokeStyle = list[len-1].color;
			context.stroke()
			context.globalCompositeOperation = "destination-over";			            
            //context.closePath();
		},
		//tip
		tipsShow:function(text){
			var This = this;
			this.tips.show = true;
			this.tips.text = text;
			setTimeout(function(){
				This.tips.show = false;
			},3000);
		}
	}
});
