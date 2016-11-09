// $(function(){
	// var floorbarnd=$(".floorbarnd")[0];
	// //console.log(floorbarnd);
	// 	var scroller=$(".scroller");
	// 	//console.log(scroller);
	// 	var eva_banner=$(".eva_banner")[0];
	// 	var div=$("div",$(".eva_banner")[0]);
	// 	// console.log(div);
	// 	var pre=$(".pre")[0];
	// 	//console.log(pre);
	// 	var pre1=$(".pre1")[0];
		
	// 	var p_ow=parseInt(getStyle(div[0],"width"));
	// 	var flag=true;
	// 	function move(){
	// 		animate(eva_banner,{left:-p_ow},666,function(){
	// 			var first=getFirst(eva_banner);
	// 			eva_banner.appendChild(first);
	// 			eva_banner.style.left="0px";
	// 			flag=true;
	// 		});
	// 	}
	// 	pre1.onclick=function(){
	// 		if(flag){
	// 			flag=false;
	// 			move();
	// 		}
	// 	}
	// 	pre.onclick=function(){
	// 		if(flag){
	// 			flag=false;
	// 			moveL();
	// 		}
	// 	}
	// 	function moveL(){
	// 			var first=getFirst(eva_banner);
	// 			var last=getLast(eva_banner);
	// 			eva_banner.insertBefore(last,first);
	// 		eva_banner.style.left=-p_ow+"px";
	// 		animate(eva_banner,{left:0},666,function(){
	// 				flag=true;
	// 		});
	// 	}
	// // }
	// p_aa=$(".scroller");
	// console.log(p_aa);
	// for(var i=0; i<p_aa.length; i++){
	// 	aa(p_aa[i]);
	// }
// })
//封闭之后的函数
// $(function(){
	function p_scroller(obj,scroller,eva_banner,div,pre,pre1){
		var yt_lunbo=obj;
		var scroller=scroller;
		var eva_banner=eva_banner;
		var div=div;
		var pre=pre;
		var pre1=pre1;

		var p_ow=parseInt(getStyle(div[0],"width"));
		// console.log(p_ow);
		// var t=setInterval(move,1500);
		var flag=true;
		var n=1;
		function move(){
			animate(eva_banner,{left:-p_ow*n},666,function(){
				for(var i=1; i<=n; i++){
					var first=getFirst(eva_banner);
					eva_banner.appendChild(first);
				}
				eva_banner.style.left="0px";
				flag=true;
			});
		}
		pre1.onclick=function(){
			if(flag){
				flag=false;
				move();
			}
		}
		pre.onclick=function(){
			if(flag){
				flag=false;
				moveL();
			}
		}
		function moveL(){
			for(var i=0; i<=n; i++){
				var first=getFirst(eva_banner);
				var last=getLast(eva_banner);
				eva_banner.insertBefore(last,first);
			}
			eva_banner.style.left=-p_ow*n+"px";
			animate(eva_banner,{left:0},666,function(){
					flag=true;
			});
		}
	}
	p_floorbarnd=$(".floorbarnd");
	// console.log(p_floorbarnd);
	for(var i=0; i<p_floorbarnd.length; i++){
		var scroller=$(".scroller",p_floorbarnd[i]);
		var eva_banner=$(".eva_banner",p_floorbarnd[i])[0];
		var div=$("div",p_floorbarnd[i]);
		var pre=$(".pre",p_floorbarnd[i])[0];
		var pre1=$(".pre1",p_floorbarnd[i])[0];
		p_scroller(p_floorbarnd[i],scroller,eva_banner,div,pre,pre1);
	}
// })