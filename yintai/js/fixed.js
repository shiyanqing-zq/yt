	var floor=$(".floor");
	var nav=$(".float_nav")[0];
	var top_hidden=$(".head")[0];
	var top_bn=$(".bn")[0];
	var top_bnH=top_bn.offsetTop;
	var floorlis=$(".floor_lis");
	//获取浏览器的高度
	Cheight=document.documentElement.clientHeight;
	// console.log(top_bnH,top_bn);
	var now;
	for(var i=0;i<floorlis.length;i++){
		floorlis[i].val=floorlis[i].innerHTML;

	}
	for(var i=0;i<floorlis.length;i++){
		floorlis[i].innerHTML="";	
	}

	for(var i=0; i<floor.length; i++){
		floor[i].index=floor[i].offsetTop;
		// console.log(floor[i].index);
	}
	//添加滚轮事件，当鼠标滚动屏幕的时间，滚动到一定程序就会出现
	window.onscroll=function(){
		var obj=document.body.scrollTop?document.body:document.documentElement;
		//判断浏览器的类型或者FF
		var top=obj.scrollTop;
		// console.log(top);
		if(top>top_bnH){
			nav.style.display="block";
		}else{
			nav.style.display="none";
		}
		if(top>=floor[0].index-1222){
			nav.style.display="block";
			var Nheight=nav.offsetHeight;
			nav.style.top=(Cheight-Nheight)/2+"px";

		}
		if(top<floor[0].index-1222){
			nav.style.display="none";

		}
		for(var i=0; i<floor.length; i++){
			if(top>=floor[i].index-333){
				for(var j=0; j<floorlis.length; j++){
					floorlis[j].style.background="";
					floorlis[j].innerHTML="";
				}
				floorlis[i].style.background="#e5004f";
				floorlis[i].innerHTML=floorlis[i].val;
				now=i;
			}
		}
		for(var i=0; i<floorlis.length; i++){
			floorlis[i].index=i;
			floorlis[i].onclick=function(){
				animate(document.body,{scrollTop:floor[this.index].index},333);
				animate(document.documentElement,{scrollTop:floor[this.index].index},333);
				now=this.index;
			}
			hover(floorlis[i],function(){
				this.style.background="#e5004f";
				this.innerHTML=this.val;
				// this.style.color="#fff";
			},function(){
				if(this.index==now){
					return;
				}
				this.style.background="";
				this.innerHTML="";
			});
		}
	}