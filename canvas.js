
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

	},
	created:function(){
		this.getinput();
	},	
	methods:{
		Add:function(){
			if(this.add.percent > this.add.placeholder){
				this.inputpercent.focus();
				this.inputpercent.value = '';
			}else{
				var color = 'rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
				this.input.push({
					name:this.add.name,
					percent:this.add.percent,
					color:color
				})
				this.add.placeholder = this.add.placeholder - this.add.percent;
				this.inputpercent.value = '';
				this.draw(color,this.add.percent/100);
			}
			
		},
		draw:function(color,deg){
			var canvas = document.querySelector('canvas');
            var context = canvas.getContext("2d");
            context.clearRect(0, 0, 400, 400);
            context.beginPath();  
            context.moveTo(200, 200);  
            context.arc(200, 200, 200, 0, Math.PI * 2*deg, false);  
            context.closePath();  
            context.fillStyle = color;
            context.fill();
		},
		getinput:function(){
			var This = this;
			Vue.nextTick(function () {
			  This.inputpercent = This.$els.percent;
			})
		}
	}
});