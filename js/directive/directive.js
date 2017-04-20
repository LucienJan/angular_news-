//组件和指令模块
;
(function() {
	var directives = angular.module("newsApp.Directives", []);
	//头部组件
	directives.directive("myheader", function() {
		return {
			templateUrl: "directives/myheader.html"
		}
	})
	//底部组件
	directives.directive("myfooter", function() {
		return {
			templateUrl: "directives/myfooter.html"
		}
	})
	//轮播图组件
	directives.directive("myswiper", function() {
		return {
			templateUrl: "directives/myswiper.html",
			link: function(scope, ele, attr) {
				var swiper = new Swiper('.swiper-container', {
					pagination: '.swiper-pagination',
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					paginationClickable: true,
					spaceBetween: 30,
					centeredSlides: true,
					autoplay: 2500,
					autoplayDisableOnInteraction: false
				});
			}
		}
	})
	// 新闻列表组件
	directives.directive("mylist", function() {
		return {
			templateUrl: "directives/mylist.html"
		}
	})
	// 搜索框组件
	directives.directive("mysearch", function(){
		return {
			templateUrl:"directives/mysearch.html"
		}
	})
	// loading遮罩
	directives.directive("myloading",function(){
		return {
			templateUrl:"directives/myloading.html"
		}
	})
	// 弹窗(点击header)
	directives.directive("mypop",function(){
		return {
			templateUrl:"directives/mypop.html"
		}
	})
})();