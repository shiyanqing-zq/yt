	//双下标轮播
	var yt_lunbo=function(obj,yt_mp1,yt_mp,yt_circle,yt_left,yt_right){
		// var mp=$(".mp1",obj)[0];
		// console.log(mp);
		var m_lunbo=obj;
		//console.log(mp);
		var mp1=yt_mp1;
		var yt_mp=yt_mp;
		// console.log(yt_mp);
		var yt_circle=yt_circle;
		var yt_left=yt_left;
		var yt_right=yt_right;
		var yt_ow=parseInt(getStyle(yt_mp[0],"width"));
		var n=0;
		var next=0;
		var flag=true;
		// var t=setInterval(move_yt,1500);

		m_lunbo.onmouseover=function(){
			yt_left.style.opacity=0.5;
			yt_right.style.opacity=0.5;
			// clearInterval(t);
		}
		m_lunbo.onmouseout=function(){
			yt_left.style.opacity=0;
			yt_right.style.opacity=0;
			// t=setInterval(move_yt,1500);
		}
		yt_right.onmouseover=function(){
			yt_left.style.opacity=1;
			yt_right.style.opacity=1;
		}
		yt_left.onmouseover=function(){
			yt_left.style.opacity=1;
			yt_right.style.opacity=1;
		}
		yt_right.onclick=function(){
			move_yt();
		}
		yt_left.onclick=function(){
			move_ytL();
		}
		function move_yt(){
			if(flag==false){
				return;
			}
			flag=false;
			next=n+1;
			if(next>=yt_mp.length){
				next=0;
			}
			yt_mp[next].style.left=yt_ow+"px";
			animate(yt_mp[n],{left:-yt_ow},600,Tween.Quad.easeInOut);
			animate(yt_mp[next],{left:0},600,Tween.Quad.easeInOut,function(){
				flag=true;
			});
			for(var i=0; i<yt_circle.length; i++){
				yt_circle[i].style.background="#818181";
			}
			yt_circle[next].style.background="#e5004f";
			n=next;
		}
		function move_ytL(){
			if(flag==false){
				return;
			}
			flag=false;
			next=n-1;
			if(next<0){
				next=yt_mp.length-1;
			}
			yt_mp[next].style.left=-yt_ow+"px";
			animate(yt_mp[n],{left:yt_ow},600,Tween.Quad.easeInOut);
			animate(yt_mp[next],{left:0},600,Tween.Quad.easeInOut,function(){
				flag=true;
			});
			for(var i=0; i<yt_circle.length; i++){
				yt_circle[i].style.background="#818181";
			}
			yt_circle[next].style.background="#e5004f";
			n=next;
		}
		//选项卡
		for(var i=0; i<yt_circle.length; i++){
			yt_circle[i].index=i;
			yt_circle[i].onclick=function(){
				if(this.index>n){
					if(!flag){
						return;
					}
					flag=false;
					yt_mp[this.index].style.left=yt_ow+"px";
					animate(yt_mp[n],{left:-yt_ow},600,Tween.Quad.easeInOut);
					animate(yt_mp[this.index],{left:0},600,Tween.Quad.easeInOut,function(){
						flag=true;
					});
				}else if(this.index<n){
					if(flag=false){
						return;
					}
					flag=false;
					yt_mp[this.index].style.left=-yt_ow+"px";
					animate(yt_mp[n],{left:yt_ow},600,Tween.Quad.easeInOut);
					animate(yt_mp[this.index],{left:0},600,Tween.Quad.easeInOut,function(){
						flag=true;
					});
				}else{
					return;
				}
				yt_circle[n].style.background="#818181";
				yt_circle[this.index].style.background="#e5004f";
				n=this.index;
				next=this.index;
			}
		}
	}
	yt_lb=$(".m_lunbo");
	// console.log(yt_lb);
	for(var i=0; i<yt_lb.length; i++){
		var yt_mp1=$(".mp1",yt_lb[i]);
		var yt_mp=$(".yt-mp",yt_lb[i]);
		// console.log(yt_mp);
		var yt_circle=$(".circle",yt_lb[i]);
		var yt_left=$(".yt-left",yt_lb[i])[0];
		var yt_right=$(".yt-right",yt_lb[i])[0];
		// console.log(yt_left);
		yt_lunbo(yt_lb[i],yt_mp1,yt_mp,yt_circle,yt_left,yt_right);
	}

	//div边框效果
	var p_bk=$(".mp2_t");
	
		for(var i=0;i<p_bk.length;i++){
		     ytborder(p_bk[i]);
		}
		function ytborder(p_bk){
			var width=parseInt(getStyle(p_bk,"width"))+2;
			var height=parseInt(getStyle(p_bk,"height"))+2;

        var arr=[];
		for(var i=0;i<4;i++){
		 	var p_bk1=$("<div>");
		   	p_bk1.style.cssText="position:absolute;background:#000;"
           	p_bk.appendChild(p_bk1);
		   	arr.push(p_bk1)
		}
           	arr[0].style.cssText+="width:0px;height:1px;left:-1px;top:-1px;"
		   	arr[1].style.cssText+="width:1px;height:0px;left:-1px;top:-1px;"
		   	arr[2].style.cssText+="width:0px;height:1px;right:-1px;bottom:-1px;"
		   	arr[3].style.cssText+="width:1px;height:0px;right:-1px;bottom:-1px;"
			p_bk.onmouseover=function(){
				animate(arr[0],{width:width},600);
				animate(arr[1],{height:height},600);
	            animate(arr[2],{width:width},600);
				animate(arr[3],{height:height},600);
			}
            p_bk.onmouseout=function(){
				animate(arr[0],{width:0},600);
				animate(arr[1],{height:0},600);
	            animate(arr[2],{width:0},600);
				animate(arr[3],{height:0},600);
			}
		}