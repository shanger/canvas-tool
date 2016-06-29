
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
				this.draw(color,deg/100);
				this.barChart(color,this.add.percent/100,this.input.length);
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