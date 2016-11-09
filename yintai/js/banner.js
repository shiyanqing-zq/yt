$(function(){
	var middle=$("#banner");
	//console.log(middle);
	var p_bj=$("img",$(".p_beijing")[0]);
	//console.log(p_bj);
	// var b_img=$("a",$(".ban_img")[0]);
	var b_img=$(".ban_img");
	//console.log(b_img);
	var circle=$(".cuboid");
	var btn_left=$(".btn-left")[0];
	var btn_right=$(".btn-right")[0];
	//console.log(circle,btn_right,btn_left);
	// b_img[0].style.zIndex=15;
	//console.log(b_img);
	// circle[0].classList.add("hot");
	//console.log(circle);
	var n=0;
	var next=0;
	var t=setInterval(move,3500);
	//var flag=true;
	function move(){
		// if(flag==false){
		// 	return;
		// }
		// flag=false;
		n++;
		if(n>=b_img.length){
			n=0;
		}
		for(var i=0; i<b_img.length; i++){
			for(var i=0; i<b_img.length; i++){
				animate(b_img[i],{opacity:0},700,Tween.Quad.easeInOut);
				animate(p_bj[i],{opacity:0},700,Tween.Quad.easeInOut);
				circle[i].style.background="#211616";
			}
			animate(b_img[n],{opacity:1},700,Tween.Quad.easeInOut);
			animate(p_bj[n],{opacity:1},700,Tween.Quad.easeInOut);
			circle[n].style.background="#e5004f";
		}
	}
	middle.onmouseover=function(){
		btn_right.style.opacity=0.5;
		btn_left.style.opacity=0.5;
		clearInterval(t);
	}	
	middle.onmouseout=function(){
		btn_right.style.opacity=0;
		btn_left.style.opacity=0;
		t=setInterval(move,3500);
	}
	btn_right.onmouseover=function(){
		btn_left.style.opacity=1;
		btn_right.style.opacity=1;
	}
	btn_left.onmouseover=function(){
		btn_right.style.opacity=1;
		btn_left.style.opacity=1;
	}
	btn_right.onclick=function(){
		// btn_right.style.opacity=1;
		move();
	}
	btn_left.onclick=function(){
		// btn_left.style.opacity=1;
		moveL();
	}
	function moveL(){
		n--;
		if(n<0){
			n=b_img.length-1;
		}
		for(var i=0; i<b_img.length; i++){
			for(var i=0; i<b_img.length; i++){
				animate(b_img[i],{opacity:0},700,Tween.Quad.easeInOut);
				animate(p_bj[i],{opacity:0},700,Tween.Quad.easeInOut);
				circle[i].style.background="#211616";
			}
			animate(b_img[n],{opacity:1},700,Tween.Quad.easeInOut);
			animate(p_bj[n],{opacity:1},700,Tween.Quad.easeInOut);
			circle[n].style.background="#e5004f";
		}
	}

	//选项卡
	for(var i=0; i<circle.length; i++){
		circle[i].index=i;
		circle[i].onmouseover=function(){
			for(var j=0; j<circle.length; j++){
				circle[j].style.background="#211616";
				animate(b_img[j],{opacity:0},700,Tween.Quad.easeInOut);
				animate(p_bj[j],{opacity:0},700,Tween.Quad.easeInOut);
			}
			animate(b_img[this.index],{opacity:1},700,Tween.Quad.easeInOut);
			animate(p_bj[this.index],{opacity:1},700,Tween.Quad.easeInOut);
			this.style.background="#e5004f";
			
			i=this.index;
		}
	}
})


