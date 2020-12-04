
		$(function(){
			// section1 ad
			var ad=$(".ad");
			var ad_btn=$(".ad .fa-times-circle");
			var ad_bg=$(".ad_bg");

			ad_btn.click(function(){
				ad.hide();
				ad_bg.hide();
			})
			ad_bg.click(function(){
				ad.hide();
				ad_bg.hide();
			})
		
			// section2 캐로셀
			var glass_motion=$(".board ol li");
			var story_btn=$(".story_btn ul li");
			var stories=$(".stories ul li");
			var N_historyBtn=$(".fa-chevron-right");
			var P_historyBtn=$(".fa-chevron-left");
			var current = 0;

			P_historyBtn.hide();

			N_historyBtn.click(function(){
				P_historyBtn.show();
				var currentImg = stories.eq(current);
				var nextImg = stories.eq(current=current+1);
				currentImg.stop().css("left",0).animate({"left":"100%"});
				nextImg.stop().css("left","-100%").animate({"left":0});
				glass_motion.removeClass("btn_active")
				glass_motion.eq(current).addClass("btn_active")
				if(current==8){
					N_historyBtn.hide();
				}
				
			})
			P_historyBtn.click(function(){
				N_historyBtn.show();
				var currentImg = stories.eq(current);
				var nextImg = stories.eq(current=current-1);
				currentImg.stop().css("left",0).animate({"left":"-100%"});
				nextImg.stop().css("left","100%").animate({"left":0});
				glass_motion.removeClass("btn_active")
				glass_motion.eq(current).addClass("btn_active")
				if(current==0){
					P_historyBtn.hide();
				}
			})

			story_btn.click(function(){
				var tg=$(this);
				var i=tg.index();
				if(current==i) return 0;

				move(i);

				function move(i){
					var currentImg = stories.eq(current);
					var nextImg = stories.eq(i);
					currentImg.css("left",0).animate({"left":"-100%"});
					nextImg.css("left","100%").animate({"left":0});
					current=i;
				}
				// 캐로셀 버튼 활성화
				glass_motion.removeClass("btn_active")
				glass_motion.eq(i).addClass("btn_active")

				if(glass_motion.eq(8).hasClass("btn_active")){
					N_historyBtn.hide();
					P_historyBtn.show();
				}else if(glass_motion.eq(0).hasClass("btn_active")){
					P_historyBtn.hide();
					N_historyBtn.show();
				}else{
					N_historyBtn.show();
					P_historyBtn.show();
				}
			})
	
			//section3 캐로셀 메뉴 코딩
			//section3 s_product click 코딩
			var big_product=$(".big_menu li");
			var s_product=$(".bottom_product li");
			var big_prev=$(".fa-angle-left");
			var big_next=$(".fa-angle-right");
			var menu_name=$(".menu_name h1");
			var current_p= 0;
			

			big_prev.click(function(){
				
				var current_product=big_product.eq(current_p);
				var next_product=big_product.eq(current_p=current_p-1);
				current_product.stop().css("left",0).animate({"left":"-500px"});
				next_product.stop().css("left","500px").animate({"left":0});
				if(current_p==-4){
					current_p=0;
				}

			})
			big_next.click(function(){
				var current_product=big_product.eq(current_p);
				var next_product=big_product.eq(current_p=current_p+1);
				current_product.stop().css("left",0).animate({"left":"500px"});
				next_product.stop().css("left","-500px").animate({"left":0});
				if(current_p==3){
					current_p=-1;
				}

			})
			
			s_product.click(function(){
				var i=$(this).index();
				if(current_p==i) return 0;

				move(i);

				function move(i){
					var current_product=big_product.eq(current_p);
					var next_product=big_product.eq(i);
					current_product.stop().css("left",0).animate({"left":"-500px"});
					next_product.stop().css("left","500px").animate({"left":0});
					current_p = i ;
				}
			})
			// 모달 시 전체 스크롤 해제 시도
			// $("body, html").on("scroll touchmove mousewheel",function(e){
			// 		e.preventDefault();
			// 		e.stopPropagation();
			// 		return false;
			// 	});
			

			// section3 모달창 코딩
			$(".menu_modal, .modal_box, .product_modal").hide();
			
			//모달 시 전체 스크롤 해제 코드
			var currentscroll=0;
			function lockscroll(){
				$(window).stop().scrollLeft(currentscroll);
			}
			
			$(".menu_modal").on("mouseenter",function(){
				currentscroll=$(window).scrollLeft();
				$(window).stop().bind("scroll",lockscroll);
			});
			$(".menu_modal").on("mouseleave",function(){
				currentscroll=$(window).scrollLeft();
				$(window).stop().unbind("scroll",lockscroll);
			});

			$(".big_choco").click(function(){
				$(".menu_modal, .modal_box, .choco_modal").show();
				menu_name.html("CHOCOLATE");
			});
			$(".big_frappe").click(function(){
				$(".menu_modal, .modal_box, .frappe_modal").show();
				menu_name.html("CHOCOLIXIR");
			});
			$(".big_set").click(function(){
				$(".menu_modal, .modal_box, .set_modal").show();
				menu_name.html("SET");
			});
			$(".big_icecream").click(function(){
				$(".menu_modal, .modal_box, .icecream_modal").show();
				menu_name.html("ICECREAM");
			});
			$(".menu_modal .fa-times-circle").click(function(){
				$("#wrapper").off("scroll touchmove mousewheel");
				$(".menu_modal, .modal_box, .product_modal").hide();
				menu_name.html("PRODUCT")
			})
			
			//모달 가격 표시
			var choco_li=$(".choco_modal li");
			var icecream_li = $(".icecream_modal li");
			var set_li = $(".set_modal li");
			var frappe_li = $(".frappe_modal li");
			var fee_num=$(".fee_num");
			
			choco_li.click(function(){
				var k=$(this).index();

				fee_num.html(choco_li.eq(k).attr('alt'))
			})
			icecream_li.click(function(){
				var k=$(this).index();

				fee_num.html(icecream_li.eq(k).attr('alt'))
			})
			set_li.click(function(){
				var k=$(this).index();

				fee_num.html(set_li.eq(k).attr('alt'))
			})
			frappe_li.click(function(){
				var k=$(this).index();

				fee_num.html(frappe_li.eq(k).attr('alt'))
			})
			
			//section4 동영상 버튼 코딩
			var play_btn=$(".go_btn");
			var stop_btn=$(".stop_btn");
			var again_btn=$(".again_btn");

			play_btn.click(function(){
				$("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
			})
			stop_btn.click(function(){
				$("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
			})
			again_btn.click(function(){
				$("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
			})
			
			// section4 리뷰창
			var go_review=$(".go_review");
			var review=$(".review");
			var review_x_btn=$(".review_x_btn");
			var review_btn=$(".review_btn");
			var review_out=$(".review_out");

			review.hide();

			go_review.click(function(){
				review.show();
			})
			review_x_btn.click(function(){
				review.hide();
			})

			
			review_btn.click(function(){
				inputVal=$(".inputVal").val();
				if(inputVal.length===0){
					alert("내용을 입력해주세요.");
				}else{
					review_out.prepend("<li>"+inputVal+"</li>");
					alert("3000원 할인 쿠폰을 받았습니다!");
				}

			})

			//가로스크롤 코딩
			var wd=$(window).width();
			$(window).resize(function(){
				wd=$(window).width();
			})

			$("html,body").on("mousewheel",function(event,delta){
				var myscrollLeft=$(window).scrollLeft();
				if(delta<0){
					$(window).scrollLeft(myscrollLeft+50);
				}else if(delta>0){
					$(window).scrollLeft(myscrollLeft-50);
				}
			})

			// 메뉴 액티브 코딩
			var menu=$(".gnb a");
			menu.click(function(){
				var i=$(this).index();
				menu.removeClass("active");
				menu.eq(i).addClass("active");
			})


			//가로스크롤에 따라 메뉴 엑티브 변경
			$(window).scroll(function(){
				var myscrollLeft=$(window).scrollLeft();
				if(myscrollLeft>=0&&myscrollLeft<wd){
					menu.removeClass("active");
					menu.eq(0).addClass("active");
				}else if(myscrollLeft>=wd&&myscrollLeft<wd*2){
					menu.removeClass("active");
					menu.eq(1).addClass("active");
				}else if(myscrollLeft>=wd*2&&myscrollLeft<wd*3){
					menu.removeClass("active");
					menu.eq(2).addClass("active");
				}else if(myscrollLeft>=wd*3&&myscrollLeft<wd*4){
					menu.removeClass("active");
					menu.eq(3).addClass("active");
				}else if(myscrollLeft>=wd*4&&myscrollLeft<wd*5){
					menu.removeClass("active");
					menu.eq(4).addClass("active");
				}
			})
			

		})