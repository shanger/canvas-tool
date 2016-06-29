
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

	},
	created:function(){
		this.getinput();
	},	
	methods:{
		Add:function(){
			if(parseInt(this.add.percent) > parseInt(this.add.placeholder)){
				this.inputpercent.focus();
				this.inputpercent.value = '';
			}else if(this.add.percent == ''){
				this.inputpercent.focus();
			}else if(this.add.name == ''){
				this.inputname.focus();
			}
			else{
				console.log(deg)
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
			}
			
		},
		draw:function(color,deg){
			var canvas = document.querySelector('canvas');
            var context = canvas.getContext("2d");
            context.beginPath();  
            context.moveTo(200, 200);  
            context.arc(200, 200, 200, 0, Math.PI * 2*deg, false);  
            context.closePath();  
            context.fillStyle = color;
            context.fill();
            context.globalCompositeOperation = "destination-over";
		},
		getinput:function(){
			var This = this;
			Vue.nextTick(function () {
			  This.inputpercent = This.$els.percent;
			  This.inputname = This.$els.name;
			})
		}
	}
});