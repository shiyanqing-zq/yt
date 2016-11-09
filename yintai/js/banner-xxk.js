//顶部head选项卡
	var head=$(".p_head");
	var h_head=$(".h_head");
	var appma=$(".appma")[0];
	// console.log(appma);
	// console.log(head,h_head);
	for(var i=0; i<head.length; i++){
		head[i].index=i;
		// head[i].onmouseover=function(){
		// 	// for(var j=0; j<head.length; j++){
		// 	// 	h_head[i].style.display="none";
		// 	// }
		// 	h_head[this.index].style.display="block";
		// }
		// h_head[this.index].style.display="none";
		hover(head[i],function(){
			h_head[this.index].style.display="block";
		},function(){
			h_head[this.index].style.display="none";
		});

		}

	var yt_myhome=$(".yt-myhome")[0];
	var myhome=$(".myhome")[0];
	// console.log(yt_myhome,myhome);
	hover(yt_myhome,function(){
		myhome.style.display="block";
	},function(){
		myhome.style.display="none";
	});


//左边选项卡
	var dl=$(".dl");
	var dd=$(".dd");
	var subz=$(".subz");
	// console.log(dl,dd,subz);
	for(var i=0; i<dl.length; i++){
		dl[i].index=i;
		hover(dl[i],function(){
			dd[this.index].style.display="block";
		},function(){
			dd[this.index].style.display="none";
		});
	}


//特卖专区选项卡
	// var p_xxk=function(mouse,xxk){
		// var mouse=mouse;
		// var xxk=xxk;
		// ht[0].classList.add(".hot");
	var mouse=$(".p_tm");
	var p_m=$(".p_m");
	var ht=$('.ht');
	var mouseA=$('.a');
	//console.log(mouseA);
	ht[0].style.display="block";
	mouseA[0].style.fontWeight="bold";
    for(var i=0; i<mouse.length; i++){
		mouse[i].index=i;
		mouse[i].onmouseover=function(){
			for(var j=0; j<mouse.length; j++){
				p_m[j].style.display='none';
				ht[j].style.display="none";
				mouseA[j].style.fontWeight="";
				// ht[j].classList.remove("hot");
			}
			p_m[this.index].style.display='block';
			ht[this.index].style.display="block";
			mouseA[this.index].style.fontWeight="bold";
			// ht[this.index].classList.add("hot");
		}
	}
// }
// var ht=$(".ht");
	// console.log(mouse,xxk);
	// p_xxk(mouse,xxk);	
	// p_tm=$(".p_tm");
	// for(var i=0; i<p_tm.length; i++){
	// 	var p_m=$(".p_m",p_tm[i]);
	// 	p_xxk(p_tm[i],p_m);
	// }
	//专柜同款选项卡
	var p_zk=$(".p_zk");
	var p_tk=$(".p_tk");
	var span=$(".span");
	var p_a=$(".p_r");
	// console.log(p_a);
	span[0].style.display="block";
	p_tk[0].style.display="block";
	p_zk[0].classList.add("p_xt");
	// p_zk[0].style.display="block";
	for(var i=0; i<p_zk.length; i++){
		p_zk[i].index=i;
		p_zk[i].onmouseover=function(){
			for(var j=0; j<p_zk.length; j++){
				p_tk[j].style.display="none";
				span[j].style.display="none";
				p_zk[j].classList.remove("p_xt");
				p_a[j].style.fontWeight="";
			}
			p_tk[this.index].style.display="block";
			span[this.index].style.display="block";
			p_zk[this.index].classList.add("p_xt");
			p_a[this.index].style.fontWeight="bold";
		}
	}